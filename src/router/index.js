import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const identifier = 'dist/'
const getBasePath = () => {
  const path = location.pathname
  return path.substr(0, path.lastIndexOf(identifier) + identifier.length)
}

export default new Router({
  mode: 'history',
  base: getBasePath(),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
