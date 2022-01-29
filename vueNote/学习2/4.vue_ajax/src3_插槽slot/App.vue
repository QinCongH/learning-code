<template>
  <div class="myapp">
    <!-- 默认插槽 ,具名插槽-->
    <slot-test1 :info="info.student">
      <img slot="center" src="./assets/背景.jpeg" alt="" />
    </slot-test1>
    <slot-test1 :info="info.car">
      <div
        slot="center"
        style="width: 100%; height: 10px; background: red"
      ></div>
    </slot-test1>
    <slot-test1 :info="info.article">
      <video slot="foot" src="" controls></video>
    </slot-test1>

    <!-- 作用域插槽,外侧必须添加template标签 
      使用scope得到数据，数据为一个对象
    
    -->
    <slot-test2>
      <!-- 写法1.scope vue2废弃-->
      <!-- <template scope="getdata">
        {{getdata.name1}}
      </template> -->
      <!-- 写法2.slot-scope vue2废弃-->
      <!-- <template slot-scope="getdata">
        {{getdata.name1}}
      </template> -->
      <!-- 写法3.v-slot:default or简写（#） 
        需要明确插槽名称  m默认为default
      
      -->
        <template v-slot:default="getdata">
        {{ getdata.name1 }}
      </template>
      <!-- <template #default="getdata">
        {{ getdata.name1 }}
      </template> -->
    </slot-test2>
  </div>
</template>
<script>
import slotTest1 from "./components/slotTest1";
import slotTest2 from "./components/slotTest2";
export default {
  data() {
    return {
      info: {
        student: ["小明", "小黄", "小方"],
        car: ["奔驰", "宝马", "本田"],
        article: ["第一天"],
      },
    };
  },
  components: {
    slotTest1,
    slotTest2,
  },
};
</script
    SlotTest1>
<style>
.myapp {
  display: flex;
  justify-content: space-around;
}
img {
  width: 300px;
}
video {
  width: 300px;
}
</style>
