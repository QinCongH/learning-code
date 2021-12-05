const express = require('express')
const fs = require('fs')
const router = express.Router()
router.use('/',(req,res,next)=>{
    next()//进入下一个中间件
})
router.get('/', (req, res,next) => {
    fs.readFile('./views/index.html', 'utf8', (err, data) => {
        if (err) {
            next(err)
            // res.send(err)
        } else {
            res.send(data)
        }
    })
})


// 错误统一处理
    router.use((err,req,res,next)=>{
        res.send('网络错误/文件错误')
        console.log(err);
    })
//错误中间件(定义404页面)
router.use((req, res, next) => {
    // res.status(404).send("404页面")
    fs.readFile("./views/404.html",'utf8', (err, data) => {
        if (err) {
            res.send(err)
        }else{
            res.status(404).send(data)
        }
 
    })
})

module.exports = router