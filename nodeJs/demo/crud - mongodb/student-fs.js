/*数据操作模块 （职责：专门对db.json文件的增删改查的处理，不关心业务）*/

//引入文件模块
const fs = require('fs')


// 1.获取数据列表
// exports.对象名称 表示为导出对应方法
var dbPath = './db.json' //json文件路径
exports.find = (callback) => { //callback回调函数，获取异步操作的值
    // 传入utf8指定文件按utf8编码格式读取文件
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            return callback(err) //传回调函数的形参
        } else {
            callback(null, JSON.parse(data).studentList) //怕回调函数识别不了参数是err还是data,故给第一个参数设置为null
        }
    })
}


// 根据id获取信息列表
exports.findByid = (id, callback) => {
    // 传入utf8指定文件按utf8编码格式读取文件
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            return callback(err) //传回调函数的形参
        } else {
            let studentList = JSON.parse(data).studentList
            // 要修改哪一个就把哪一个找出来
            //es6中数组方法：find 找到数组的一个对象，通过这个方法找到id
            var stu = studentList.find(function (item) {
                return item.id === Number(id) //返回需要更新数据相同的id数据列
            })


            callback(null, stu) //怕回调函数识别不了参数是err还是data,故给第一个参数设置为null
        }
    })
}

// 2.添加保存数据
exports.save = (newstudents, callback) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            return callback(err) //传回调函数的形参
        }
        let studentList = JSON.parse(data).studentList; //转化为对象并存储
        // 处理id值，由于id值具有唯一性和自增性，故每次增加数据时，只需要找到原始对象中的最后一个id，增加时给id加1
        newstudents.id = studentList[studentList.length - 1].id + 1
        // 处理cttime
        let d = new Date()
        newstudents.cttime = d.toLocaleDateString()
        studentList.push(newstudents) //添加数据到数组中
        let fileData = JSON.stringify({ //将studetList转化为字符串并存储到变量中
            studentList: studentList
        })
        // 将fileData保存到json文件中
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            // 成功则没有错误，故返回空
            callback(null)
        })
    })
}
// 3.更新数据
exports.update = (newstudents, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            return callback(err) //错误传给回调函数
        }
        // 获取到json文件的数据,并转化为对象
        let studentList = JSON.parse(data).studentList
        // 要修改哪一个就把哪一个找出来
        let d = new Date()
        newstudents.cttime = d.toLocaleDateString()
        newstudents.id = Number(newstudents.id) //将id转化为数字
        //es6中数组方法：find 找到数组的一个对象，通过这个方法找到id
        var stu = studentList.find(function (item) {
            return item.id === newstudents.id //返回需要更新数据相同的id数据列,需要把id转化为数字
        })
        // 遍历拷贝对象
        for (var key in newstudents) {
            stu[key] = newstudents[key]
        }

        let fileData = JSON.stringify({ //将studetList转化为字符串并存储到变量中
            studentList: studentList
        })
        // 将fileData保存到json文件中
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            // 成功则没有错误，故返回空
            callback(null)
        })
    })

}
// this.update({name:..,},function(){

// })
// 4.删除学生
exports.delete = (newstudents, callback) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            callback(err)
        }
        let studentList = JSON.parse(data).studentList //获取到json 转化为对象
        newstudents.id = Number(studentList.id) //将id转化为数字
        // findindex方法:找到数组对应的下标    找到要删除的数组对列,并存取在stu变量中
        var deleteId=studentList.findIndex(function (item) {
            item.id===newstudents.id
        })
        //通过splice方法 找到下标删除对应列
        studentList.splice(deleteId,1)//splice(下标,删除个数)        
        let fileData = JSON.stringify({ //将studetList转化为字符串并存储到变量中
            studentList: studentList
        })
        // 将fileData保存到json文件中
        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            // 成功则没有错误，故返回空
            callback(null)
        })
    })
}