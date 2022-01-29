<template>
  <div>
    <div class="container pr">
      <div class="row">
        <div class="top">头部</div>
      </div>
      <div class="row mt60">
        <div class="col-md-2">
          <div class="slide">
            <ul>
              <!--router-link 设置 路由组件间跳转 。 active-class 实现切换 。tag指定router-link组件标签-->
               <router-link to="/about" tag="li" active-class="active"> About </router-link>
               <router-link to="/home" tag="li" active-class="active"> Home </router-link>
         
            </ul>
          </div>
        </div>
        <div class="col-md-10">
          <div class="content">
            <!-- 路由视图 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import AboutContent from "./pages/AboutContent.vue";
import HomeContent from "./pages/HomeContent.vue";
export default {
  name: "App",
  components: {
    AboutContent,
    HomeContent,
  },
};
</script>
<style>
.row > *{
  padding-left:0px;
  padding-right:0px;
}
* {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.mt30 {
  margin-top: 30px;
}
.top {
  width: 100%;
  height: 60px;
  background: skyblue;
  padding-left: 0px;
}
.pr {
  position: relative;
}

.slide ul {
  width: 100%;
  padding-left: 0px;
}
.slide li {
  width: 100%;
  background: wheat;
  text-align: center;
  line-height: 50px;
  height: 50px;
  cursor: pointer;
}
.active {
  background: rgb(155, 235, 135) !important;
  color: #fff;
}
.content {
  background: rgb(235, 217, 135);
  width: 100%;
}
</style>
