const express = require('express');
const User = require('../models/user');
const asyncHandler = require('../utils/async-handler');
const router = express.Router();

// 로그인 상태 가져오기
router.get(
  '/auth',
  asyncHandler(async (req, res) => {
    const authStatus = req.user
      ? { isAuth: true, isAdmin: req.user.isAdmin }
      : { isAuth: false, isAdmin: false };

    return authStatus;
  })
);

module.exports = router;
