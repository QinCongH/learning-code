<template>
  <div>
    <h1>We</h1>
    <div class="msg">
      <ul class="msgList">
        <!-- 1.跳转并携带params参数，to的字符串写法 ：
        :to="`路径/参数`"
        :to="`/about/we/msgContent/id=${v.id}/title=${v.title}`"
        -->
        <!-- <router-link
          v-for="v in msgList"
          :key="v.id"
          tag="li"
          :to="`/about/we/msgContent/${v.id}/${v.title}`"
        >
          {{ v.title }}
        </router-link> -->
        <!-- 2.跳转并携带params参数，to的对象写法  
    params中不允许使用path，仅使用name
    -->
        <router-link
          v-for="v in msgList"
          :key="v.id"
          tag="li"
          :to="{
            name: 'MsgContent',
            query: {
              id: v.id,
              title: v.title,
            },
          }"
        >
          {{ v.title }}
        </router-link>
        <input type="text" />
      </ul>
      <div class="msgContent">
        <!-- keep-alive 防止切换路由时组件被销毁。include属性指定组件名 -->
        <keep-alive include="msgContent"> 
          <router-view> </router-view>
        </keep-alive>
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
  beforeDestroy() {
    console.log("We组件即将被销毁");
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