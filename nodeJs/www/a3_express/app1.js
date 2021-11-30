//引入模块
const express=require('express')
const fs=require('fs')
// 创建服务器
const app=express()
//创建路由
// app.get('/',function(req,res){
//     res.send("aa");
// })
// 使用get匹配css文件测试
    // app.get('/public/css/test.css',function(req,res){
    //     fs.readFile('./public/css/test.css',function(err,data){
    //         if(err){
    //             res.send(err)
    //         }else{
    //             res.send(data)
    //         }
    //     })
    // })
    // 使用all获取css测试
    // app.all('/public/css/test.css',function(req,res){
    //     fs.readFile('./public/css/test.css',function(err,data){
    //         if(err){
    //             res.send(err)
    //         }else{
    //             res.send(data)
    //         }
    //     })
    // })
    // 使用use获取css测试
app.use('/public/css/test.css',express.static('public/css/test.css'))
//启动服务
app.listen(2002,function(){
    console.log("http://localhost:2002");
})