// 1.引入模块
const express = require('express')
// const path=require('path')
const url = require('url')
// import fs from 'fs';
// 2.创建服务器
const app = express()
// 3.配置
app.set('views', './views'); //设置模板引擎渲染指定文件夹
app.engine('html', require('express-art-template')) //express配置模板引擎
app.use(express.static('public')); // 静态文件响应的处理
// 4.创建路由
// #index-page
app.get('/', function (req, res) {
    res.render('index.html', {
        msgs: msgs
    })
})
// #add-page
app.get('/add', function (req, res) {
    res.render('add.html')
})
//doedit-page//新增处理页面
app.get('/doadd', function (req, res) {
    //1.接收数据
    var paramobj = url.parse(req.url, true).query;
    // console.log(paramobj);
    //2.入库
    var d = new Date()
    var msg = {
        name: paramobj.name,
        content: paramobj.content,
        msg_time: d.toLocaleDateString()
    }
    msgs.push(msg); //添加数据
    //3.跳转
    res.setHeader('Location','/')
    res.statusCode=302
    res.end()

})
// 5.启动服务
app.listen(2002, function () {
    console.log("http://localhost:2002")
})


var d = new Date()
var msgs = [{
    name: '小明',
    content: '你好我是小明',
    msg_time: d.toLocaleDateString()
}, {
    name: '小红',
    content: '你好我是小玉',
    msg_time:  d.toLocaleDateString()
}, {
    name: '小玉',
    content: '你好我是小玉',
    msg_time:  d.toLocaleDateString()
}]