const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const fs = require('fs');
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
    let fileData = null;

    if (req.file) {
      const blob = bucket.file(req.file.filename);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype,
        },
      });

      await new Promise((resolve, reject) => {
        const fileStream = fs.createReadStream(req.file.path);

        fileStream.on('error', (error) => {
          reject(new Error('Error reading file from disk'));
        });

        fileStream
          .pipe(blobStream)
          .on('error', (error) => {
            reject(new Error('Error uploading file to Firebase'));
          })
          .on('finish', async () => {
            const signedUrlConfig = { action: 'read', expires: '03-09-2491' };
            const signedUrl = await blob.getSignedUrl(signedUrlConfig);
            fileData = {
              url: signedUrl[0],
              originalName: req.file.originalname,
            };
            resolve();
          });
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
      file: fileData,
    });
  })
);

// posts 가져오기
router.get(
  '/',
  requestHandler(async (req) => {
    const { category, page = 1, limit = 10 } = req.query;

    const posts = await Post.find({ category: category })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const totalPosts = await Post.countDocuments({ category: category });

    return { posts, totalPosts, totalPages: Math.ceil(totalPosts / limit) };
  })
);

// post 가져오기
router.get(
  '/:postId',
  requestHandler(async (req) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) throwError(ERROR.POST_NOT_FOUND, 404);

    return { post };
  })
);

// post 조회수 증가
router.post(
  '/:postId/views',
  requestHandler(async (req) => {
    const { postId } = req.params;
    await Post.findByIdAndUpdate(postId, { $inc: { views: 1 } });
  })
);

module.exports = router;
