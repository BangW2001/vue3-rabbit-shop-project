
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入初始化的样式文件
import '@/styles/common.scss'
import { imgLazyPlugin } from './directives';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(imgLazyPlugin)
app.mount('#app')


