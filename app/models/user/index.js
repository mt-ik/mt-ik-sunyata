
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: String,
    password: String,
    uid: Number,
    createTime: String,
    admin: { type: String, default: '管理员' },
    status: Number, // 1: 普通管理 2: 超级管理
    avatar: { type: String, default: 'default.jpg' },
    city: String
})

userSchema.index({ id: 1 })

const User = mongoose.model('User', userSchema)

module.exports = User