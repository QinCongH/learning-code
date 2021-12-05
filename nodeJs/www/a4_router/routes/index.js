// 引入模块
const express=require('express')
const fs=require('fs')
// 创建路由器对象
let router=express.Router()
// 在路由器中挂载路由
router.get('/',(req,res)=>{
    // res.send("ok")
    fs.readFile('./views/index.html',"utf8",(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})

// 导出路由器
module.exports=router