<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from '@/components/index'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
