import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Frontpage from '@/components/Frontpage'

Vue.use(Router)

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-frontpage', Frontpage);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
