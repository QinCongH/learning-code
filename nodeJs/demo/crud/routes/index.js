//  index路由器
// 1.引入express模块
const { render } = require('art-template')
const express=require('express')
// 2.使用路由
const router=express.Router()
// 3.定义路由中间件
router.use("/",(req,res,next)=>{
    next();
})
router.get('/',(req,res)=>{
    res.render("index.html")//使用模板引擎渲染
})

router.use((req,res,next)=>{
    res.render("404.html")//定义404页面
})
//4.导出
module.exports=router