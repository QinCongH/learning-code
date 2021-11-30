//--------------创建服务器，并创建跳转页面
// // 1.引入模块
var http = require('http');
var url = require('url');
var fs = require('fs');
var util = require('util');
var querystring=require('querystring');
var moment=require('moment');
// // 2.创建web服务器
var server = http.createServer();
server.on('request', function (req, res) {
    //获取url
    var root = req.url;
    if (root === "/") {
        //内置fs方法，读文件
        fs.readFile("view/index.html", {
            encoding: 'utf-8'
        }, function (err, data) {
            if (err) { //如果文件访问错误
                res.writeHead(404, {
                    "Content-Type": "text/html"
                }); //写响应头
                res.end("404"); //响应内容为404，响应并终止
            } else { //文件内容访问

                // 创建动态页面
                var msghtml = ""
                // js中forEach方法循环遍历数组内容；拼接到msghtml中
                msgs.forEach(function (item) {
                    // es6语法：反引号，遍历$(变量名)输出.一定是用反单引号啊！不要写成单引号了！！
                    msghtml += `<tr><td>${item.name}</td><td>${item.content}</td><td>${item.create_time}</td></tr>`
                })
                //data.replace("html替换源",js要替换的数据变量名)；replace方法将视图中获取的内容替换成最终数据
                var data = data.replace("{{content}}", msghtml);
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data); //注意，res.end只能响应二进制数据或者字符串
            }
        })
    } else if (root === "/add") { //当地址为“/add”时
        fs.readFile("./view/add.html", {
            encoding: 'utf-8'
        }, function (err, data) {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/html"
                });
                res.end("404");
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data)
            }
        })
    } else if (root.indexOf("/doadd") === 0) { //indexOf("/doadd")===0：用于查找寻找/doadd。修改页面的处理
        //表单提交数据处理
        if (req.method == "post") { //需求方法req.method 获取视图层form提交的方法
            // 1.接收数据
            //说明：post请求提交的数据比较大，故分片获取；data事件-数据传输中，end事件-数据传输结束
            var postData = '';
            req.on("data", function (chunk) {
                postData += chunk;
            });
            req.on('end', function () {
                //通过querystring模块将字符串转化为对象
                paramobj=querystring.parse(postData);
            //    paramobj = JSON.parse(postData);
                   res.end(util.inspect(postData));
            
            })
            //2.入库（传入数据中）
            //创建对象变量msg，存储接收的数据
            var d = new Date();
            var msg = {
                name:paramobj.name,
                content:paramobj.content,
                create_time: d.toLocaleDateString()
            }
            // console.log(msg);
            msgs.push(msg);
            //3.跳转
            res.setHeader('Location', '/'); //res.setHeader('Location','路径')跳转
            res.statusCode = 302;
            res.end();
        } else {
            //1.接收数据
            //创建变量存储视图层传过来的数据
            //通过url内置模块获取到get发送的请求，并通过url.parse方法将数据转化为对象
            var paramobj = url.parse(req.url, true).query;
            // console.log(paramobj);
            //2.入库（传入数据中）
            //创建对象变量msg，存储接收的数据
            // var d = new Date();
            var msg = {
                name: paramobj.name,
                content: paramobj.content,
                create_time:moment().format('YYYY-MM-DD')
            }
            // console.log(msg);
            msgs.push(msg);
            //3.跳转
            res.setHeader('Location', '/'); //res.setHeader('Location','路径')跳转
            res.statusCode = 302;
            res.end();
        }
    } else if (root.indexOf("/public") === 0) {
        // 检测静态资源并响应
        fs.readFile("./" + root, "utf-8", function (err, data) {
            if (err) {
                res.end("404");
            } else {
                res.end(data)
            }
        })
    } else {
        // 设置404页面,访问不到的页面调用
        fs.readFile("./view/404.html", "utf-8", function (err, data) {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/html"
                });
                res.end("404");
            } else {
                res.writeHead(404, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            }
        })
    }
})
server.listen(4040);
console.log("ok:http://localhost:4040");
//---------模拟数据库数据
// 创建留言板数据对象
var msgs = [{
        name: '张三',
        content: '你好我是张三',
        create_time: '2001-12-23'
    },
    {
        name: '李四',
        content: '你好我是李四',
        create_time: '2001/12/23'
    },
    {
        name: '王五',
        content: '你好我是王五',
        create_time: '2001/12/23'
    },
    {
        name: '小明',
        content: '你好我是小明',
        create_time: '2001/12/23'
    }
]