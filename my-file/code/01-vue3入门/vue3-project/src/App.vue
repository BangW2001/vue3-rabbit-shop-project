<script setup>
  import { ref,watch } from 'vue'
  const people = ref({
    name:"zs",
    age:27
  })
  //第一个参数为需要监听的特定属性
  watch(
    ()=>people.value.age,
    (newValue,oldValue)=>console.log(`age的值发生了变化,原来的值为${oldValue},现在的值为:${newValue}`)
  )
</script>
<template>
  <div>姓名：{{ people.name }}</div><br>
  <div>年龄：{{ people.age }}</div>
</template>