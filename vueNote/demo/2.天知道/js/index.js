var app=new Vue({
    el:'#app',
    data:{
        city:"",
        // 创建数组
        List:[],
        cityName:["武汉","北京","海南"]
    },
    methods:{
        getWeather:function(){
            // console.log("aa");
            // 调用接口http://wthrcdn.etouch.cn/weather_mini?city=
             // 全局存储this
            var that=this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(
                function(response){
                    // console.log(response.data.data.forecast);
                    that.List=response.data.data.forecast;
                    // console.log(that.List);
                
                }
            ).catch(function(arr){
                console.log(arr);
            })
        },
        getCity:function(city){
               this.city=city; 
               this.getWeather();

        },
        clickCity:function(){
            this.getWeather();
        }
    }
})
/*
    1.点击input回车查询（v-on,enter）
    2.查询数据 axios接口 v-model
    3.渲染数据（v-for，that）

  2.实现回车查询  
接口：
http://wthrcdn.etouch.cn/weather_mini?city=
*/