// ignore_for_file: deprecated_member_use

import 'package:flutter/material.dart'; //1.导入material的ui库

void main() => {
      //2.入口文件，runApp()方法用于启动flutter应用，
      //接收一个webget参数，MyApp是一个app实例
      runApp(const MyApp())
    };

// 3.应用结构
//创建MyApp类继承StatelessWidget，StatelessWidget表示不可变的状态控件
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  // 构建界面需要用到Widget的build()方法,build()用来描述如何构建界面，build方法来构建widget树
  Widget build(BuildContext context) {
    // MaterialApp是flutter的ui库
    return MaterialApp(
      //应用app
      title: '第一个app',
      //主题
      theme: ThemeData(
        //nav颜色
        primarySwatch: Colors.yellow,
      ),
      //应用首页的路由
      home: const MyHomePage(title: '首页'),
    );
  }
}

//1. 创建新的页面路由类
class NewState extends StatelessWidget {
  const NewState({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("第二个页面")),
      body: const Center(
        child: Text("this is newState"),
      ),
    );
  }
}

//应用的首页---继承自StatefulWidget，是一个可变的控件,将build方法放在State中，可以给开发带来很大的灵活性
class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

//首页的状态类
class _MyHomePageState extends State<MyHomePage> {
  //定义状态
  int _counter = 0;
  //编写状态处理函数
  void _incrementCounter() {
    /*setState方法的作用是通知Flutter框架，有状态发生了改变，
    Flutter框架收到通知后，会执行build方法来根据新的状态重新构建界面*/
    setState(() {
      _counter++;
    });
  }

  @override
  //使用build构建界面
  Widget build(BuildContext context) {
    /*
  Scaffold 是 Material库中提供的一个widget, 
  它提供了默认的导航栏、标题和包含主屏幕widget树的body属性。widget树可以很复杂。    
     */
    return Scaffold(
      //设置navBar文字
      appBar: AppBar(
        title: Text(widget.title),
      ),
      //body设置内容
      //center可以将内容设置到中心
      body: Center(
        //使内容Column(竖排)展示，还可以Row(横排)展示
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            //第一个text控件
            const Text(
              'You have pushed the button this many times:',
            ),
            //第二个text控件，显示点击的状态数值
            Text(
              //使用'$变量名'的方法引用变量
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
            FlatButton(
              textColor: Colors.blue,
              onPressed: () {
                //导航到新路由
                Navigator.push(context, MaterialPageRoute(builder: (context) {
                  return const NewState();
                }));
              },
              child: const Text("点击跳转"),
            )
          ],
        ),
      ),
      //floatingActionButton是带+号的悬浮按钮，
      floatingActionButton: FloatingActionButton(
        // onPressed触发回调函数
        onPressed: _incrementCounter,
        //长按按钮的提示
        tooltip: 'Increment',
        //引入+号的icon图标
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

class NewRoute {}
