import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vueDebounce from 'vue-debounce';

import "./assets/main.scss";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(vueDebounce);

Vue.prototype.$eventHub = new Vue({}); // Global event bus

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
