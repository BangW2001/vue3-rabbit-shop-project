import httpInstance from "@/utils/http";

//获取首页类别的接口
const getCategoryApi = ()=>{
  return httpInstance({
    url:"/home/category/head"
  })
}


export default getCategoryApi