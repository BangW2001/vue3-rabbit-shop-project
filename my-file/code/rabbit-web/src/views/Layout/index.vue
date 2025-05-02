<template>
  <div>
    <NavLayout></NavLayout>
    <HeaderLayout></HeaderLayout>
    <RouterView/>
    <FooterLayout></FooterLayout>
  </div>
</template>
<script setup>
import NavLayout from '@/views/Layout/components/NavLayout.vue';
import HeaderLayout from '@/views/Layout/components/HeaderLayout.vue';
import FooterLayout from '@/views/Layout/components/FooterLayout.vue';
</script>