<template>
  <div id="app">
    <AppSearchWeather/>
  </div>
</template>

<script>
import AppSearchWeather from './components/AppSearchWeather/AppSearchWeather.vue'


export default {
  name: 'App',
  components: {
    AppSearchWeather
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
}
</style>
