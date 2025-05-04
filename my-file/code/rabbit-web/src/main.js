
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core';
import App from './App.vue'
import router from './router'

//引入初始化的样式文件
import '@/styles/common.scss'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

//自定义全局指令
app.directive("img-lazy",{
    mounted(el,binding){
        //el为指令绑定的元素
        //binding为指令对象,binding.value为指令传过来的值
        //使用vueUse中的IntersectionObserver来判断对象是否可见
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
              if (isIntersecting) {
                console.log('图片进入视口');
                // 可以在这里执行图片加载逻辑
                el.src = binding.value; // 替换为真实图片路径
                stop(); // 停止监听
              }
            },
            {
              threshold: 0.1, // 当图片至少 10% 进入视口时触发
            }
          );
    }
})
