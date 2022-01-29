<template>
  <div>
    <h1>AboutContent</h1>
    <ul class="childList">
      <router-link tag="li" active-class="childActive" to="/about/we">
        we
      </router-link>
      <!-- 路由命名跳转 -->
      <router-link
        tag="li"
        active-class="childActive"
        :to="{ name: 'Company' }"
      >
        company
      </router-link>
    </ul>
    <!-- 子路由 -->
    <keep-alive include="We">
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
//引入组件
import We from "./We";
import Company from "./Company";
export default {
  name: "AboutContent",
  //挂载组件
  components: {
    We,
    Company,
  },
};
</script>

<style>
.childList {
  display: flex;
}
.childList li {
  width: 50%;
  height: 30px;
  background: rgb(219, 219, 219);
  cursor: pointer;
}
.childActive {
  background: pink !important;
}
</style>