const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 註冊
exports.register = async (req, res) => {
    
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: '用戶已存在' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: '註冊成功', userId: newUser.id });
    } catch (error) {
        res.status(500).json({ message: '註冊失敗', error });
    }
};

// 登入
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: '用戶不存在' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: '密碼錯誤' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '40m' });
        res.status(200).json({ token, userId: user.id, email: user.email });
    } catch (error) {
        res.status(500).json({ message: '登入失敗', error });
    }
};

// 獲取所有用戶資料
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        const userDTO = users.map(user => ({
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }));
        res.status(200).json(userDTO);
    } catch (error) {
        res.status(500).json({ message: '獲取用戶資料失敗', error });
    }
};

// 獲取單一用戶資料
exports.getUserProfile = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: '用戶不存在' });
        }

        const userDTO = {
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
        res.status(200).json(userDTO);
    } catch (error) {
        res.status(500).json({ message: '獲取用戶資料失敗', error });
    }
};

// 更新用戶資料
exports.updateUserProfile = async (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: '用戶不存在' });
        }

        user.username = username;
        user.email = email;
        await user.save();

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: '更新用戶資料失敗', error });
    }
};

// 更新用戶密碼
exports.updateUserPassword = async (req, res) => {
    const userId = req.params.id;
    const { password } = req.body;

    try {
        const user = await User.findByPk(userId);
    } catch (error) {
        res.status(500).json({ message: '更新用戶密碼失敗', error });
    }
};

// 登出
exports.logout = (req, res) => {
    res.status(200).json({ message: '登出成功' });
};
