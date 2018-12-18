import Vue from 'vue'
import App from './App.vue'
window.App=App;
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
