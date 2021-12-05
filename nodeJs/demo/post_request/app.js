// 1.引入模块
const express=require('express')
const querystring=require('querystring')
const fs=require('fs')
const bodyParser=require('body-parser')
// const cookie=express.cookie
// 2.创建服务器
const app=express()
// 3.路由
app.get('/',function(req,res){
    // fs.readFile('./views/index.html')
    res.sendFile(__dirname+'/views/index.html')
})
//login处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.post('/mylogin',function(req,res){
    // 获取post请求的数据,通过一个事件：监听是否有数据
    // req.on("data",(chunk)=>{
    //     console.log(chunk.toString());
    //     let obj=querystring.parse(chunk.toString());//将数据转化为对象
    //     console.log(obj.user)
    //     //模拟验证登录 
    //     let a=2,b=3;
    //     if(obj.user!=a||obj.pwd!=b){
    //         res.send('登陆失败')
    //     }else{
    //         res.send('登陆成功')
    //     }
    // })
    

    // console.log(obj);
    console.log(req.body);
    res.send('登陆成功')
    // 存储cookie
    res.cookie('user',req.body.user)
    res.cookie('pwd',req.body.pwd)

})
//4.启动服务
app.listen(2002,function(){
    console.log("http://localhost:2002");
})