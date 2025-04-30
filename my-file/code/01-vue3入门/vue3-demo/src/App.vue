<template>
  <div>
    <button class="number-box" @click="adddCount">{{ count }}</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const count = ref(0)
const adddCount = ()=>count.value+=1
// export default {
//   data(){
//     return {
//       count:0
//     }
//   },
//   methods:{
//     adddCount(){
//       this.count+=1
//     }
//   }
// };
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 10px auto;
  background-color: #f0f0f0;
}

.number-box {
  /* margin: 10px auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 2px solid #333;
  border-radius: 4px;
  font-size: 24px;
  font-family: Arial, sans-serif;
}
</style>