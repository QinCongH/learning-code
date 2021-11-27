/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址: https://api.imjad.cn/cloudmusic/?type=url&id= 
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://api.imjad.cn/cloudmusic/?type=detail&id=

    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
// 设置axios的基地址
// axios.defaults.baseURL = 'https://autumnfish.cn';
var app = new Vue({
  el: "#app",
  data: {
    searchVle: "五月天",
    musicList: [],
    musicSrc: '',
    dotStyle: false,
    musicCover: "",
    coverList: [],
    coverImg: "",
    comments: 0,
    videostyle: true,
    mvSrc: "",
    // 动画播放状态
    isPlaying: false,
  },
  methods: {
    queryMusic: function () {
      // console.log(this.searchVle);
      axios.get("https://autumnfish.cn/search?keywords=" + this.searchVle).then(
        response => {
          // 保存内容
          // console.log(response);
          this.musicList = response.data.result.songs;
          console.log(this.musicList);
        }
      );
      this.dotStyle = true;
    },
    clickMusic: function () {
      this.queryMusic();
    },
    playMusic: function (musicid) {
      // 获取音乐播放链接
      axios.get("https://api.imjad.cn/cloudmusic/?type=url&id= " + musicid).then(
        response => {
          this.musicSrc = response.data.data[0].url;
          // console.log(this.musicSrc);
        }
      )
      // 获取音乐封面
      axios.get("https://api.imjad.cn/cloudmusic/?type=detail&id=" + musicid).then(
        response => {
          this.musicCover = response.data.songs[0].al.picUrl;
          // console.log(this.musicCover);
        }
      )
      // 歌曲评论
      axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicid).then(
        response => {
          // console.log(response.data.hotComments);
          this.coverList = response.data.hotComments;

        }
      )
    },
    musicMv: function (mvid) {
      // mv获取
      this.videostyle = false;
      axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
        response => {
          console.log(response.data.data.url);
          this.mvSrc = response.data.data.url;
        }
      )
      this.playMusic(musicid);
    },
    musicClose: function () {
      this.videostyle = true;
      video.pause();
    },
    // 歌曲播放&歌曲暂停
    // 歌曲播放
    play: function () {
      // console.log("play");
      this.isPlaying = true;
    },
    // 歌曲暂停
    pause: function () {
      // console.log("pause");
      this.isPlaying = false;
    },
  }
})



// 功能1.酷狗查询音乐
/*http://msearchcdn.kugou.com/api/v3/search/song?keyword=


1.获取input列表数据 v-model
2.点击回车查询 v-on
3.获取接口数据
功能2 歌曲播放
    https://api.imjad.cn/cloudmusic/?type=url&id= 
    1.点击播放 v-on

    2.获取地址
    3.设置地址 v-bind

功能3 获取专辑
1.获取封面
2.设置


功能3 评论

*/