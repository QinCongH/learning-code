//引入模块
const express = require('express')
const template = require('art-template')
const indexRouter=require('./routes/index')//引入index路由器
// 创建app实例对象
const app = express()
// 配置
//声明使用的模板引擎
app.engine('html', require('express-art-template'));
//  响应静态文件
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}    
app.use(express.static('public', options));//响应public文件夹 
app.use(express.static('node_modules', options));//响应node_modules文件夹 

// 路由
app.use('/',indexRouter)//使用index路由器
//启动服务
app.listen(2002, () => {
    console.log("run: http://localhost:2002");
})