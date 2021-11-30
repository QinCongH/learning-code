// 1.引入模块
const express=require('express')
// 2.创建web服务器
const app=express()
//3.创建路由（http创建时：创建监听并请求事件）
app.get('/',function(req,res){
   //三种"响应字符串"方法 
    // res.end("响应成功")  //会乱码
    res.send("响应成功"); //自动识别 直接响应,意：响应并关闭
    // res.render("响应成功") //自动识别，只能打开指定文件字符串并响应，必须配合模板引擎使用
})
// 4.启动服务
app.listen('2002',function(){
    console.log("ok: http://localhost:2002 ");
})
