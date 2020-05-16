import Vue from 'vue'
import App from './App.vue'
import videoClip from './components/index'

Vue.config.productionTip = false
Vue.use(videoClip)

new Vue({
  render: h => h(App)
}).$mount('#app')
