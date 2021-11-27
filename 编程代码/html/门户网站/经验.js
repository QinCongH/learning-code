// 1.导航栏搜索框效果
// 当文档内容完全加载完毕再去执行函数中的内容
window.onload=function(){
    var obox=document.getElementById('box');
    var obj=document.getElementById('kuang');
    var osug=document.getElementById('suggest');
    // 获取osug元素下的span元素对象集合
    var oa=osug.getElementsByTagName('span');
    // 为obj元素注册oninput和onpropertychange的触发事件
    obj.oninput=obj.onpropertychange=onchange;
    // 为obj元素注册onblur事件处理函数
    obj.onblur=function(){disbox()}
    // 当obj元素中的value值发生改变时要执行的函数。
    function onchange(){
        // obj元素的value值赋值给txt变量。
var txt=this.value;
// 获取value值的字符串长度。
var words=txt.length;
// 如果字符串长度为0，那么osug元素隐藏。
if(words==0){
    osug.style.display='none';
}
// 如果字符串的长度小于8，那么就显示osug元素，然后为oa元素集合中的每一个span元素设置相关内容。
else if(words<=8){
osug.style.display='block';
for(var index=0;len=oa.length,index<len;index++){
oa[index].innerHTML=txt;
}
}
// 如果字符串长度大于8，那么将进行一定的截取字符串操作。
else if(words>8){
    osug.style.display='block';
    var limit=txt.substring(0,8)+"...";
    for(var index=0;len=oa.length,index<len;index++){
    oa[index].innerHTML=limit;
    }
    }
    }
}
function disbox(){
    document.getElementById('suggest').style.display='none';
}