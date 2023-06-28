import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {init} from "./js/db.js";
import 'element-plus/theme-chalk/dark/css-vars.css'

init()
createApp(App).mount('#app')


