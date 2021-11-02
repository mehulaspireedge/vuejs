import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'

Vue.use(Router);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})