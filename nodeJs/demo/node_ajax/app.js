// 引入模块
const express=require('express')
//创建服务器
const app=express()
//请求
app.get('/',function(res,req){
    req.send("ok");
})
// 解决跨域
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });
//启动服务
app.listen(2002,function(){
    console.log('http://localhost:2002')
})