// 连接mysql
const mysql=require('mysql')
// 连接mysql
const connection=mysql.createConnection({
    host:'localhost',//本地
    user:'root',
    password:'root',
    database:'hero'
})
// 建立连接
connection.connect();
// 进行查询
connection.query('select * from user',function(err,results,fields){
    if(err) throw err
    console.log(results)
})

// 结束连接
connection.end()