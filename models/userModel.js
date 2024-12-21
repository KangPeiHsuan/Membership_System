const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection'); // 引入 sequelize 實例

// 定義 User 模型
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true // 自動增加 createdAt 和 updatedAt 欄位
});

// 同步模型到資料庫
(async () => {
    try {
        await sequelize.sync(); // 確保資料庫和模型一致
        console.log('User model synced successfully.');
    } catch (error) {
        console.error('Error syncing User model:', error);
    }
})();

module.exports = User;