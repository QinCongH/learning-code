// 1.引入模块
const mongoose = require('mongoose')
//3.1设计表结构方法1
const Schema = mongoose.Schema
// 2.连接数据库
mongoose.connect("mongodb://localhost/test1");
// 3.2设计表结构方法2
var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    }
})

// 4.创建模块 => 将文档结构发布为模块
const User = mongoose.model('User', userSchema)
// 5.对数据表的操作
// 5.1.增加
const admin = new User({
    username: 'admin',
    pwd: '123456',
    email: '123456@qq.com'
})

// admin.save(function (err, ret) {
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(ret) //打印结果
//     }
// })


// 5.2查询
// 查询所有
User.find(function (err, ret) {
    if (err) {
        console.log(err)
    } else {
        console.log('查询成功');
        console.log(ret)
    }
})
    // 条件查询：查询所有username是admin的数据
User.find({username:'admin'},function(err,ret){
    if(err){
        console.log(err)
    }else{
        console.log('查询成功');
        console.log(ret)
    }
})
    //查询单个
User.findOne({username:'admin'},function(err,ret){
    if(err){
        console.log(err)
    }else{
        console.log('查询成功');
        console.log(ret)
    }
})
 //根据id查询单个
User.findById('61b373ab90b40560339ded85',function(err,ret){
    if(err){
        console.log('更新失败');
    }else{
        console.log('更新成功');
        console.log(ret);
    }
})


// // 5.3删除
// //根据条件删除所有
// User.remove({
//     username:'admin'
// },function(err,ret){
//     if(err){
//         console.log('删除失败');
//     }else{
//         console.log('删除成功');
//         console.log(ret);
//     }
// })

// 根据条件删除一个
//  User.findByOneAndRemove({ username:'admin'},{password:'123456'},function(err,ret){
//     if(err){
//         console.log('删除失败');
//     }else{
//         console.log('删除成功');
//     }
// })

// 根据id删除一个 表名.findByIdAndRemove('id名',{字段内容},callback)
// User.findByIdAndRemove('61b373ab90b40560339ded85',{password:'123456'},function(err,ret){
//     if(err){
//         console.log('删除失败');
//     }else{
//         console.log('删除成功');
//     }
// })

// // 5.4更新数据
// 根据条件更新所有
// User.update({username:'admin'},{pwd:'123'},function(err,ret){
//     if(err){
//         console.log('更新失败');
//     }else{
//         console.log('更新成功');
//         console.log(ret);
//     }
// })

// 根据条件更新一个
// User.findOneAndupdate({username:'admin'},{pwd:'123'},function(err,ret){
//     if(err){
//         console.log('更新失败');
//     }else{
//         console.log('更新成功');
//         console.log(ret);
//     }
// })


// 根据id更新一个
// User.findByIdAndUpdate('61b373ab90b40560339ded85',{pwd:'123'},function(err,ret){
//         if(err){
//             console.log('更新失败');
//         }else{
//             console.log('更新成功');
//             console.log(ret);
//         }
//     })