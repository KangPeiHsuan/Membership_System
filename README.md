# 會員系統實作 Membership System

## 實現功能
- 會員註冊
- 會員登入/登出
- 會員資料修改

## 使用技術
- 使用 Node.js 編寫
- 使用 Express 框架
- 使用 MySQL 資料庫

### 開發環境使用
- 使用 nodemon 監控檔案變化
- 使用 express-generator 快速生成 Express 專案
- 使用 postman 測試路由

### .env 設定
- .env.example 是 .env 的範例檔案，請複製一份並命名為 .env
- 在 .env 檔案中設定 JWT_SECRET，用於生成 JWT 令牌
- 在 .env 檔案中設定 DB_NAME, DB_USER, DB_PASSWORD，用於連接 MySQL 資料庫
