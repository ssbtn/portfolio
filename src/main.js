import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//vuetify関連
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify ,{
  iconfont: 'fa4'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
