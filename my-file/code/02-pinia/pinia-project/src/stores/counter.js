import { defineStore } from 'pinia';
import { computed } from 'vue';
import { ref } from 'vue';
export const useCounterStore = defineStore("counte",()=>{
  //ref()就是state属性
  const count = ref(0)
  //computed()就是getters
  const doubleCount = computed(()=>count.value*2)
  //function()就是actions
  function increment(){
    count.value+=1
  }
  return {count,doubleCount,increment}
})