

// // 1.引入模块
var http=require('http');
var fs=require('fs');
// // 2.创建web服务器
var server=http.createServer();
server.on('request',function(req,res){
    //获取url
    var root=req.url;
    if(root==="/"){
        fs.readFile("view/index.html", {encoding: 'utf-8'},function(err,data){
            if(err){
                res.writeHead(404,{"Content-Type":"text/html"});
                res.end("404");
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        })
    }
})
server.listen(4040);
console.log("ok:http://localhost:4040");
