import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';
import store from './store';
import mitt from 'mitt';
import './assets/css/sch-commercialportal-font.css'

const emitter = mitt();

const app = createApp(App)
app.use(store).use(router).use(VueAxios, axios)
app.config.globalProperties.emitter = emitter;
app.mount('#app');
