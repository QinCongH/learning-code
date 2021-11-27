// 1.引入模块
var http=require('http');
// 2.创建web服务器
var server=http.createServer()
// 3.监听请求
server.on('request',function(req,res){//req请求  res响应
    // req.url设置页面
    if(req.url=='/'){
        msg="<h1>首页</h1>"
    }else if(req.url=='/Login'){
        msg='登录页'
    }else{
        msg="404"
    }
    console.log('收到用户请求，请求地址：'+req.url);
    res.setHeader('Content-Type','text/html;charset=utf-8');//设置响应头编码格式
    res.write(msg);//设置响应内容
    res.end();//关闭响应
})
//4,启动服务
server.listen(6060,function(){
    console.log('服务访问成功，访问：http://localhost:6060')
})