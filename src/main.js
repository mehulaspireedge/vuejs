import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'

Vue.use(Router);
Vue.config.productionTip = false

var router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/hw",
      name: "Hello World",
      component: HelloWorld,
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')