---

---

# Pinia

`Pinia`是`Vue`专属的最新状态管理库，是`vuex`状态管理工具的替代品

[Pinia官网](https://pinia.vuejs.org/zh/introduction.html)

**Pinia的特点**

- 提供更加简单的`API`，去掉了`mutations`
- 提供符合组合式风格的`API`
- 去掉了`modules`的概念，每一个`store`都是一个独立的模块
- 搭配`TypeScript`一起使用提供可靠的类型推断
- 三大核心概念：`state`、`getter`、`action`，`action`既支持同步，也支持异步

**安装pinia**

```shell
npm install pinia
```

**具体使用步骤**

[参考官方文档](https://pinia.vuejs.org/zh/core-concepts/)，了解如何定义`store`、如何使用`store`，以及如何从`store`中进行解构

**实例**

在`main.js`中创建`pinia`对象，并绑定到`vue`实例

```js

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
```

新建`src/stores/counte.js`，在其中定义`store`

```js
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
```

在`App.vue`中使用`store`

```vue
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
    <div>count:{{ count }}</div>
    <div>
        <button @click="increment">count++</button>
    </div>
    <div>{{ doubleCount }}</div>
</template>
```

