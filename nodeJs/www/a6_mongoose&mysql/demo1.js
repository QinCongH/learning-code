// 引入模块
const mongoose = require('mongoose');
// 连接MongoDB数据库//mongoose.connect('mongodb://localhost/数据库名');
mongoose.connect('mongodb://localhost/test');
//创建模型=>设计数据库mongoose.model('表名',{设置字段类型})
const Cat = mongoose.model('Cat', {
    name: String
});
// 实例化一个cat
const kitty = new Cat({
    name: 'Zildjian'
});
// 持久化保存kitty
kitty.save().then(() => console.log('meow'));