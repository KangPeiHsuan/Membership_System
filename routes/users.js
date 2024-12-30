var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

// 測試路由
router.get('/test', 
  // #swagger.ignore = true
  function(req, res) {
    res.send({
      status: 'success',
      message: 'Hello World'
    })
  }
);

// 取得所有用戶、取得單一用戶
router.get('/', 
  // #swagger.tags = ['Users']
  // #swagger.summary = '取得所有用戶'

  /* 
  #swagger.responses[200] = { 
      description: '成功取得所有用戶',
      schema: {
        "id": 1,
        "username": "user01",
        "email": "user01@gmail.com",
        "createdAt": "2024-12-21T17:31:21.000Z",
        "updatedAt": "2024-12-21T17:31:21.000Z"
      }
  }
  */
  userController.getAllUsers);
router.get('/:id', 
  // #swagger.tags = ['Users']
  // #swagger.summary = '取得單一用戶'

  /* 
  #swagger.responses[200] = { 
      description: '成功取得單一用戶',
      schema: {
        "id": 1,
        "username": "user01",
        "email": "user01@gmail.com",
        "createdAt": "2024-12-21T17:31:21.000Z",
        "updatedAt": "2024-12-21T17:31:21.000Z"
      }
    }
  }
  */

  // #swagger.responses[404] = { description: '用戶不存在' }
  userController.getUserProfile);

// 註冊、登入、登出
router.post('/register', 
  // #swagger.tags = ['Users']
  // #swagger.summary = '使用者註冊'


  /*	
  #swagger.parameters['user'] = {
    in: 'body',
    description: '註冊資料',
    required: true,
    schema: { 
      "username": "string",
      "email": "email",
      "password": "string" 
    }
  } 
  */

  /* 
  #swagger.responses[200] = { 
      description: '成功註冊',
      schema: {
        "message": "註冊成功",
        "userId": 1
      }
  }
  */
  userController.register);
router.post('/login', 
  // #swagger.tags = ['Users']
  // #swagger.summary = '使用者登入'

  /*	
  #swagger.parameters['user'] = {
    in: 'body',
    description: '登入資料',
    required: true,
    schema: { 
      "email": "email",
      "password": "string" 
    }
  } 
  */
  /* 
  #swagger.responses[200] = { 
      description: '成功登入',
      schema: {
        "message": "登入成功",
        "token": "token",
        "userId": 1,
        "email": "user01@gmail.com"
      }
  }
  */
  // #swagger.responses[400] = { description: '登入失敗' }
  userController.login);

router.post('/logout', 
  // #swagger.tags = ['Users']
  // #swagger.summary = '使用者登出'

  /* 
  #swagger.responses[200] = { 
      description: '成功登出',
      schema: {
        "message": "登出成功"
      }
  }
  */
  userController.logout);

// 更新用戶資料(除密碼外)
router.put('/update/:id', 
  // #swagger.tags = ['Users']
  // #swagger.summary = '修改使用者資料'

  /*	
  #swagger.parameters['user'] = {
    in: 'body',
    description: '修改資料',
    required: true,
    schema: { 
      "username": "string",
      "email": "email"
    }
  } 
  */

  /* 
  #swagger.responses[200] = { 
      description: '成功修改使用者資料',
      schema: {
        "id": 1,
        "username": "user01",
        "email": "user01@gmail.com",
        "createdAt": "2024-12-30T13:50:37.000Z",
        "updatedAt": "2024-12-30T13:55:14.764Z"
      }
  }
  */
  // #swagger.responses[404] = { description: '用戶不存在' }
  userController.updateUserProfile);

// 更新用戶密碼
router.patch('/update-password/:id', 
  // #swagger.tags = ['Users']
  // #swagger.summary = '修改使用者密碼'


  /*	
  #swagger.parameters['user'] = {
    in: 'body',
    description: '修改密碼',
    required: true,
    schema: { 
      "password": "string"
    }
  } 
  */

  /* 
  #swagger.responses[200] = { 
      description: '成功修改使用者密碼',
      schema: {
        "message": "更新用戶密碼成功"
      }
  }
  */
  // #swagger.responses[404] = { description: '用戶不存在' }
  userController.updateUserPassword);

module.exports = router;

