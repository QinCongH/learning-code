// 引入模块
const express=require('express')
// 挂载路由
let router=express.Router();
// 使用路由
router.get('/login',(req,res)=>{
    res.send("登录")
})
router.get('/register',(req,res)=>{
    res.send("注册")
})
// 导出路由
module.exports=router