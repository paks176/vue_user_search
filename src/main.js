import Vue from 'vue'
import App from './App.vue'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles/global-styles.css'

import store from '@/store';

// plugins
import Toast from '@/plugins/toasts';

Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
