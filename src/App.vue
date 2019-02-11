<template>
  <div id="app">
    <div>
      template相对路径写法<img src="./assets/logo.png" title="template相对路径写法">
    </div>
    <div>
      template绝对路径写法<img src="@/assets/logo.png" title="template绝对路径写法">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
