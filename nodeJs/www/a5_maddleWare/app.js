const express=require('express')
const app=express()
// 配置响应静态文件(中间件作用1)
// app.use(express.static('./public/'))
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now());
    }
  }
  
  app.use(express.static('public', options));
// 使用路由
const indexRouter=require('./routes/index')
app.use('/',indexRouter)

app.listen(2002,()=>{
    console.log("http://localhost:2002");
})