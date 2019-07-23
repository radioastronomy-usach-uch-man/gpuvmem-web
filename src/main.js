import Vue from 'vue'
import App from './App.vue'

/* Vuetify */
import vuetify from './plugins/vuetify';

/* Rotuer */
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
