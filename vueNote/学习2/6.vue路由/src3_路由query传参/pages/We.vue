<template>
  <div>
    <h1>We</h1>
    <div class="msg">
      <ul class="msgList">
        <!-- 1.跳转并携带query参数，to的字符串写法 -->
        <!-- <router-link
          v-for="v in msgList"
          :key="v.id"
          tag="li"
          :to="`/about/we/msgContent?id=${v.id}&title=${v.title}`"
        >
          {{ v.title }}
        </router-link> -->
    <!-- 2.跳转并携带query参数，to的对象写法  -->
        <router-link
          v-for="v in msgList"
          :key="v.id"
          tag="li"
          :to="{
              path:'/about/we/msgContent',
              query:{
                  id:v.id,
                  title:v.title
              }
          }"
        >
          {{ v.title }}
        </router-link>
      </ul>
      <div class="msgContent">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "We",
  data() {
    return {
      msgList: [
        { id: 1, title: "消息1" },
        { id: 2, title: "消息2" },
        { id: 3, title: "消息3" },
      ],
    };
  },
};
</script>

<style>
.msg {
  display: flex;
}
.msgList > li {
  background: skyblue;
  width: 100px;
  cursor: pointer;
  margin: 10px 0px;
  text-align: center;
}
</style>