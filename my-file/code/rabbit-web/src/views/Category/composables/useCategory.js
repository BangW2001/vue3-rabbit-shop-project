import { getTopCategoryAPI } from "@/apis/category";
import { onMounted, onUpdated, ref } from "vue";
import { useRoute,onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
    const categoryData = ref({});
    const route = useRoute();
    const getTopCategory = async (id) => {
        const res = await getTopCategoryAPI(id);
        categoryData.value = res.data.result;
    };
    onMounted(() => {
        getTopCategory(route.params.id);
    });

    onBeforeRouteUpdate((to) => {
        //这个地方不能有router.params.id，这样拿到的是当前路由对象
        //而需要拿到的是即将访问的路由对象,默认参数to就是代表即将访问的对象
        getTopCategory(to.params.id)
    })
    return {categoryData}
}
