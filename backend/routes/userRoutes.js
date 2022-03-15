const express = require('express');

const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getUserName,
} = require('../controller/userController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/me', protect, getMe);

router.get('/user-name', protect, getUserName);

module.exports = router;
