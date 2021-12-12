// -------------使用mongodb获取到数据

// 引入mongoose数据库框架
const mongoose=require('mongoose')


// 连接数据库
mongoose.connect("mongodb://localhost/test1")

// 创建文档结构变量
const Schema=mongoose.Schema
// 
var studentSchame=new Schema({
    name:{
        type:String,
        required:true
    },
    tel:{
        type:Number,
        required:true,
        // enum:[0,1],//       枚举0/1
        default:0//默认为0
    },
    state:{
        type:String,
        required:true
    },
    cttime:{
        type:String,
        // required:true
    }


})

// 导出模型构造函数
module.exports=mongoose.model('student',studentSchame)

