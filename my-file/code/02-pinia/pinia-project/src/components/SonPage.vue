<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const store = useCounterStore()
const { count,doubleCount } = storeToRefs(store)
const {increment} = store
</script>
<template>
    <div>count:{{ count }}</div>
    <div>
        <button @click="increment">count++</button>
    </div>
    <div>{{ doubleCount }}</div>
</template>