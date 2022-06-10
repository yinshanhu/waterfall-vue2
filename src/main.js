import Vue from 'vue';

// css resets
import 'normalize.css/normalize.css';
import './styles/flex.less';

import App from './App.vue';
import router from './router';
import VConsole from 'vconsole';
import VueLazyload from 'vue-lazyload';

if (process.env.VUE_APP_ENV !== 'production') {
  new VConsole();
}

Vue.use(VueLazyload);

// 阻止vue启动生产消息
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
