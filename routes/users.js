var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

// 測試路由
router.get('/test', function(req, res) {
  res.send({
    status: 'success',
    message: 'Hello World'
  })
});

// 取得所有用戶、取得單一用戶
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserProfile);

// 註冊、登入、登出
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// 更新用戶資料(除密碼外)
router.put('/update/:id', userController.updateUserProfile);

// 更新用戶密碼
router.patch('/update-password/:id', userController.updateUserPassword);

module.exports = router;

