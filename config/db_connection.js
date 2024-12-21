// 引入 dotenv 套件，讀取 .env 檔案中的環境變數
require('dotenv').config();

// 使用解構賦值的方式引入 sequelize 內的 Sequelize 類別
const { Sequelize } = require('sequelize');

// 建立 Sequelize 實例，連接到 MySQL 資料庫
    // database_name / username / password / host / dialect
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
});

// 測試連接
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
