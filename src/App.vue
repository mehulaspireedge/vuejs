<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Home msg="Welcome to Home page"/>  -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
import Header from './components/assets/Header.vue'
import Footer from './components/assets/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    //Home,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
