/**
 * @description: 获取banner图
 * @param {distributionSite}广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 * @return {*}
 */
import  httpInstance  from '@/utils/http'
function getBannerAPI (params = {}){
  const { distributionSite = '1' } = params
  return httpInstance({
    url:'home/banner',
    params:{
      distributionSite,
    }
  })
}

export default getBannerAPI


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return  httpInstance({
    url:'home/hot'
  })
}


/**
 * @description: 获取商品列表
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return  httpInstance({
    url:'home/goods'
  })
}

