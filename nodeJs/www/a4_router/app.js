// 导入模块
const express=require('express')
// 创建app
const app=express()
//使用路由
    //引入
const indexRouter=require('./routes/index.js')
const userRouter=require('./routes/user.js')
//使用路由器
    // index
app.use('/',indexRouter) 
    //user
    // console.log(userRouter);
app.use('/user',userRouter)   
    // 启动服务
app.listen(2002,()=>{
    console.log("http://localhost:2002");
})