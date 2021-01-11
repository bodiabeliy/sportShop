import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import 'firebase/firestore'
import 'material-design-icons-iconfont'
import db from './plugins/firebase'

Vue.config.productionTip = false

new Vue({
  db,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
