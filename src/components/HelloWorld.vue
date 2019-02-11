<template>
  <div class="hello">
    <p>
      template子组件相对路径写法 <img src="../assets/logo.png" title="template子组件相对路径写法">
    </p>
    <p>
      template子组件绝对路径写法 <img src="@/assets/logo.png" title="template子组件绝对路径写法">
    </p>
    <p>
      template模块变量写法 <img :src="logoPath" title="template模块变量写法">
    </p>
    <p>
      template模块变量写法2 <img :src="logoPath2" title="template模块变量写法">
    </p>
    <div class="image-wrapper">
      style 图片相对路径引用<div class="img img-a"></div>
    </div>
    <div class="image-wrapper">
      style 图片绝对路径引用<div class="img img-b"></div>
    </div>
    <div class="image-wrapper">
      style 图片绝对路径引用2<div class="img img-c"></div>
    </div>
  </div>
</template>

<script>
// import logoPath2 from '@/assets/logo.png'
// var logoPath = require('@/assets/logo.png')

import logoPath2 from '@/../static/images/logo.png'
var logoPath = require('@/../static/images/logo.png')

export default {
  name: 'HelloWorld',
  data () {
    return {
      logoPath: logoPath,
      logoPath2: logoPath2,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .image-wrapper{
    width:200px;
    height:200px;
  }

  .img{
    width:200px;
    height:200px;
    display:inline-block;
    &-a{
      background:url('../assets/logo.png')
    }
    &-b{
      background:url('~@/assets/logo.png')
    }
    &-c{
      background:url('~@/../static/images/logo.png')
    }

  }
</style>
