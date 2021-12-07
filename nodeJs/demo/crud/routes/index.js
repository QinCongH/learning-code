//  index路由器
// 1.引入express模块
const express = require('express')
// 引入文件模块
const fs = require('fs')
// 引入json文件操作模块
const student = require('../student')
// 2.使用路由
const router = express.Router()
// 3.定义路由中间件
router.use("/", (req, res, next) => {
    next();
})
// 路由
//主页
router.get('/', (req, res) => { //主页
    // 数据操作模块的find方法
    student.find((err, studentList) => {
        if (err) {
            res.status(500).send("server error")
        } else {
            res.render("index.html", {
                studentList
            })
        }
    })


    //使用模板引擎渲染
})
// 增加页面
router.get('/add', (req, res) => { //增加页面
    res.render("add.html")
})
//增加处理（读取文件->将文件转换为对象->在对象中添加数据->添加后将对象转化为字符串）
router.post('/add', (req, res) => {
    // 1.获取表单提交数据
    // 2.操作处理
    //将数据保存到db.json
    // 3.发送响应
    student.save(req.body, (err) => {
        if (err) {
            res.status(500).send("server error")
        }
        res.redirect('/') //重定向到首页
    })
})
//编辑页面
router.get('/edit', (req, res) => {

    // 1.获取要编辑的id
    // 2.渲染编辑页面
    // 3.根据id将学生信息查出来
    // 4.使用模板引擎渲染页面
    student.findByid(parseInt(req.query.id), (err, studentList) => {
        if (err) {
            res.status(500).send("server error")
        } else {
            res.render("edit.html",{
                studentList
            })
        }
    })



    // res.render("edit.html")
})
//编辑处理
router.post("/edit", (req, res) => {

    student.update(req.body,(err)=>{
        if(err){
            res.status(500).send("server error")
        }
        res.redirect("/")
    })


    // res.send("编辑处理")
})
//删除处理
router.get('/delete', (req, res) => {
    // 1.通过id获取到要删除的数列
    // 2.根据id执行删除操作
    // 3.根据操作结果发送响应数据
    // res.send('删除处理')
    student.delete(req.query,function(err){
        if(err){
            res.status(500).send("server error")
        }
        res.redirect('/')
    })

})





router.use((req, res, next) => {
    res.render("404.html") //定义404页面
})
//4.导出
module.exports = router