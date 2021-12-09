// 1.引入模块
const mongoose = require('mongoose')
//3.1设计表结构方法1
const Schema = mongoose.Schema
// 2.连接数据库
mongoose.connect("mongodb://localhost/test1");
// 3.2设计表结构方法2
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    }
})

// 4.创建模块 => 将文档结构发布为模块
const User = mongoose.model('User', userSchema)


// 5.对数据表的操作
// 5.1.增加
const admin = new User({
    username: 'admin',
    pwd: '123456',
    email: '123456@qq.com'
})

admin.save(function (err, ret) {
    if (err) {
        console.log('保存失败')
    } else {
        console.log('保存成功')
        console.log(ret)//打印结果
    }
})