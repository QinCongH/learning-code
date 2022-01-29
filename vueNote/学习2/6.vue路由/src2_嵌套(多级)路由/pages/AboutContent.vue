<template>
  <div>
    <h1>AboutContent</h1>
    <ul class="childList">
      <router-link tag="li" active-class="childActive" to="/about/we"> 
          we
      </router-link>
      <router-link tag="li" active-class="childActive" to="/about/company"> 
          company
      </router-link>
    </ul>
        <!-- 子路由 -->
        <router-view>

        </router-view>
  </div>
</template>

<script>
//引入组件
import We from './We'
import Company from './Company'
export default {
  name: "AboutContent",
  //挂载组件
  components:{
    We,
    Company
  }
};
</script>

<style>
.childList{
  display: flex;
}
.childList li{
  width: 50%;
  height: 30px;
  background: rgb(219, 219, 219);
  cursor: pointer;
}
.childActive{
  background: pink !important;
}

</style>