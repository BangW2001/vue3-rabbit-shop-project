<script setup>
//通过defineEmits宏函数生成emit方法
//参数为数组，可以一次性传入当前组件所有自定义的事件
const emit = defineEmits(["send-message"])
//emit方法触发对应的事件
const sendMessage = ()=>{
  emit("send-message","从子组件传来的数据")
}
</script>
<template>
  <button @click="sendMessage">子传父</button>
</template>