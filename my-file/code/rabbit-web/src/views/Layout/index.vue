<template>
  <div>
    <LayoutFix/>
    <NavLayout></NavLayout>
    <HeaderLayout></HeaderLayout>
    <!--给路由组件添加key属性，强制其切换销毁重建-->
    <!-- <RouterView :key="$route.fullPath"/> -->
    <RouterView/>
    <FooterLayout></FooterLayout>
  </div>
</template>
<script setup>
import NavLayout from '@/views/Layout/components/NavLayout.vue';
import HeaderLayout from '@/views/Layout/components/HeaderLayout.vue';
import FooterLayout from '@/views/Layout/components/FooterLayout.vue';
import LayoutFix from './components/LayoutFix.vue';

import { useCategoryStore } from '@/stores/categoryStore';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore()
onMounted(()=>{
  categoryStore.getCategory()
})
</script>