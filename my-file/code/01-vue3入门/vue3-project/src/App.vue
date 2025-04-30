<script setup>
  import { ref,onMounted } from 'vue'
  import SonPage from './components/SonPage.vue'
  const sonRef = ref(null)
  //组件挂载完毕之后才能获取对应的dom
  onMounted(()=>{
    console.log(sonRef.value)
    console.log(sonRef.value.name)
    sonRef.value.logMsg()
  })
</script>
<template>
  <SonPage ref="sonRef">子组件</SonPage>
</template>