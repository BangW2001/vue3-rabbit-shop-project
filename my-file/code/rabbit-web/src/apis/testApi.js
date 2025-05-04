//测试axios实例能否正常发送请求
import httpInstance from "@/utils/http";

export default function getCategory(){
  return httpInstance({
    url:"/home/category/head"
  })
}