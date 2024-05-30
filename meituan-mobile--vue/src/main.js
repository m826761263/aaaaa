import './assets/main.css'
import './assets/icon/iconfont.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import * as echarts from 'echarts'  

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(Vant);
app.config.globalProperties.$axios = axios
app.provide('$axios', axios)
app.provide('echarts',echarts)


app.mount('#app')
// 0103 苗桐菲 2024--5-14
