
   // 定义一个存储相关内容的数组，模拟后台获取的数据，数组每个元素都是一个字符串
   var keywords = ["周杰伦", "周杰伦新专辑", "周杰伦等你下课", "陈奕迅", "陈奕迅演唱会", "陈奕迅歌手",
   "陈奕迅王菲","前端","前端开发","前端入门到放弃","前端要学什么","周润发","周润发赌神","周润发澳门风云","周末双休是国家规定吗","super junior",
   "JavaScript","Java","super junior成员","super junior成员强仁","super junior成员金英云","A short journey"];

// 获取文本框，按钮和列表
var txt=document.getElementById("txt");
var search=document.getElementById("search");
var kw=document.getElementById("keywords");

// 给文本框注册一个键盘弹起事件，每按下一个按键弹起后，函数执行一遍
txt.onkeyup= function () {
   kw.innerHTML="";  //每一次匹配数据前，先把列表清空，如果不清空会导致每一次获取的内容都叠加显示在列表上

   if(this.value){ //文本框里有输入内容时才进行数据匹配和显示
       for(var i=0;i<keywords.length;i++){  //遍历数组里的所有内容
           if(keywords[i].indexOf(this.value)!=-1){  //如果文本框输入的字符或字符串能匹配到数组元素的字符串，就创建一个li标签，把数组的这个元素当成li标签的内容展示出来
               var li=document.createElement("li"); 
               li.innerHTML=keywords[i];
               kw.style.display="block";
               kw.appendChild(li); 
               
               //给新创建的每一个li标签注册一个鼠标移入和移出事件
               li.onmouseover= function () {
                   this.defaultColor=this.style.backgroundColor; //定义一个defaultColor属性来存储li标签本来的背景颜色
                   this.style.backgroundColor="#F1F1F1";
               };

               li.onmouseout= function () {
                   this.style.backgroundColor=this.defaultColor;
               };
               // 给新创建的每一个li标签注册一个点击事件
               li.onclick= function () {
                   txt.value=this.innerHTML; //将点击的列表内容显示到文本框                    
               };
           }
       }
   }
};
// 给整个HTML注册一个点击事件，清空列表并将列表隐藏
document.documentElement.onclick= function () {
   kw.innerHTML="";
   kw.style.display="none";                                
}
