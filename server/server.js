require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const getUserFromJWT = require('./middlewares/get-user-from-jwt');
const userRoutes = require('./routes/user');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

server.use(getUserFromJWT);
server.use('/api', userRoutes);

mongoose
  .connect(
    'mongodb+srv://raquim47:wlsal9473@edu-assoc.xbvmjyh.mongodb.net/?retryWrites=true&w=majority&appName=edu-assoc'
  )
  .then(() => console.log('DB 연결'))
  .catch((err) => console.error('Mongoose error:', err));

server.listen(3030, () => {
  console.log(`서버 실행, 포트 : 3030`);
});
