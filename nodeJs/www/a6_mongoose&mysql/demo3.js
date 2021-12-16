// 连接mysql
const mysql = require('mysql')
// 连接mysql
const connection = mysql.createConnection({
    host: 'localhost', //本地
    user: 'root',
    password: 'root',
    database: 'hero'
})
// 建立连接
connection.connect();
// 1.查询
// let querySql = 'select * from user'
// connection.query(querySql, function (err, results, fields) {
//     if (err) throw err
//     console.log(results)
// })
//  查询一行
let querySqlByid = 'select * from user where uid=123461'
connection.query(querySqlByid, function (err, results, fields) {
    if (err) throw err
    console.log(results)
})
//2.增加-------------
// INSERT INTO table_name ( field1, field2,...fieldN )
//                        VALUES
//                        ( value1, value2,...valueN );
// let addSql='INSERT INTO user (uid,username,pwd,name,nameimg,tel,permissions,address) VALUES (0,?,?,?,?,?,?,?)'//语句
// let addSqlParams=['111','小明','111','小明','小明','111','111','111']//内容
// connection.query(addSql, addSqlParams, (err, result) => {
//     if (err) {
//       console.log('[增加失败] - ', err.message);
//       return;
//     }
//     console.log('--------------INSERT-------------');
//     console.log('增加成功 ID:',result.insertId);
//     console.log('增加成功:', result);
//     console.log('--------------------------------\n\n');
//   });
// ---------------

// 更新(按id查询更新)
// let updataSql = 'UPDATE user SET username = ?,pwd = ? WHERE uid = ?'
// let updataSqlParams = ['222', '222', 123466]
// connection.query(updataSql, updataSqlParams, (err, result) => {
//     if (err) {
//         console.log('[更新失败] - ', err.message);
//         return;
//     }
//     console.log('----------UPDATE---------------');
//     console.log('更新成功', result.affectedRows);
//     console.log('-------------------------------\n\n');
// });


// 删除 DELETE FROM users where id=4
// let delSql = 'DELETE FROM user where uid=123466';
// connection.query(delSql, (err, result) => {
//     if (err) {
//       console.log('[删除失败] - ', err.message);
//       return;
//     }
  
//     console.log('--------DELETE---------------');
//     console.log('删除成功', result.affectedRows);
//     console.log('------------------------\n\n');
//   });
  
// 结束连接
connection.end()