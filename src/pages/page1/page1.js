import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './template/index.vue'
import store from '@/store/page1.js'
import '@/components/style/common.styl'

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App />'
})
