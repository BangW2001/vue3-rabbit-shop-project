<script setup>
  import { ref,onMounted } from 'vue'
  const divRef = ref(null)
  //组件挂载完毕之后才能获取对应的dom
  onMounted(()=>{
    console.log(divRef.value.innerText)
  })
</script>
<template>
  <div ref="divRef">ref绑定的元素</div>
</template>