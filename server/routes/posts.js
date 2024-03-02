const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { upload, bucket } = require('../middlewares/file-uplode');
const requestHandler = require('../utils/request-handler');
const { ERROR } = require('../utils/constants');

// 새 post 등록
router.post(
  '/',
  upload.single('file'),
  requestHandler(async (req) => {
    const { title, content, category } = req.body;
    const { username: authorName, userId: authorId } = req.user;
    let fileUrl = null;

    if (req.file) {
      const blob = bucket.file(req.file.filename);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });

      await new Promise((resolve, reject) => {
        blobStream.on('error', () =>
          reject(new Error('Error uploading file to Firebase'))
        );
        blobStream.on('finish', () => {
          fileUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
          resolve();
        });
        blobStream.end(req.file.buffer);
      }).catch((error) => {
        throwError(ERROR.FILE_UPLOAD_FAILED + error.message, 500);
      });
    }
    await Post.create({
      title,
      authorName,
      authorId,
      content,
      category,
      file: fileUrl,
    });
  })
);

// post 가져오기
router.get(
  '/:category',
  requestHandler(async (req) => {
    const { category } = req.params;
    const { page = 1, limit = 10 } = req.query;
    console.log(category, page, limit, 'hi');

    const posts = await Post.find({ category: category })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const totalPosts = await Post.countDocuments({ category: category });

    return { posts, totalPosts, totalPages: Math.ceil(totalPosts / limit) };
  })
);

module.exports = router;
