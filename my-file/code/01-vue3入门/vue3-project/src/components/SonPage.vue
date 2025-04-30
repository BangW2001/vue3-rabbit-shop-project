<script setup>
  import { ref } from 'vue';
  const name = ref("zs")
  const logMsg = ()=>{
    console.log("logMsg")
  }
  //通过defineExpose编译宏指定允许访问的属性和方法
  defineExpose({
    name,
    logMsg
  })
</script>
<template>
  
</template>