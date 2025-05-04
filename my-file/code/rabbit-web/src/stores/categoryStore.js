import { defineStore } from "pinia";
import { ref } from "vue";
import getCategoryApi from "@/apis/layout"
export const useCategoryStore = defineStore("category",()=>{
  const categoryList = ref([])
  const getCategory = async ()=>{
    const res = await getCategoryApi()
    categoryList.value = res.data.result
  }
  return {categoryList,getCategory}
})
