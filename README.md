# 會員系統實作 Membership System

## 實現功能
- 會員註冊
- 會員登入/登出
- 會員資料修改

## 開發環境與使用技術
### 環境設置
- 使用 Node.js 編寫
- 使用 Express 框架
- 使用 MySQL 資料庫

### 使用技術
- 使用 JWT 進行無狀態的身份驗證
- 使用 bcrypt 進行密碼加密
- 使用 sequelize (ORM) 進行資料庫操作

### 開發工具及套件
- 使用 nodemon 監控檔案變化
- 使用 express-generator 快速生成 Express 專案
- 使用 postman 測試路由

## 執行檔案
### .env 設定
- .env.example 是 .env 的範例檔案，請複製一份並命名為 .env
- 在 .env 檔案中設定 JWT_SECRET，用於生成 JWT 令牌
- 在 .env 檔案中設定 DB_NAME, DB_USER, DB_PASSWORD，用於連接 MySQL 資料庫

### 執行指令
- `$ npm install` 安裝相關套件
- `$ npm run swagger` 產出/更新 API 文件
- `$ npm run dev` / `$ nodemon` (開發時)可啟動 nodemon 監控檔案變化
- `$ npm start` 啟動伺服器