<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const store = useCounterStore()
//从 store 中提取属性时保持其响应性，需要使用 storeToRefs()
const { count,doubleCount } = storeToRefs(store)
//可以直接从 store 中解构 action，因为它们也被绑定到 store 上
const {increment} = store
</script>
<template>
    <div>count:{{ store.count }}</div>
    <div>
        <button @click="increment">count++</button>
    </div>
    <div>{{ doubleCount }}</div>
</template>