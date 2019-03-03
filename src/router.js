import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Thanks from './views/Thanks.vue'
import DataList from './views/DataList.vue'
import Delete from './views/Delete.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '/data',
      name: 'data',
      component: DataList
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete
    }
  ]
})
