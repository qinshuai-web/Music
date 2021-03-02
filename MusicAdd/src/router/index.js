import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'


Vue.use(Router)

const routes=[
    {
      path: '/',
      name: 'index',
      component: () => import('../components/index.vue'),
      redirect:'/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../components/home/home.vue')
        },
        {
          path: '/hot',
          name: 'hot',
          component: () => import('../components/hot/hot.vue')
        },
        {
          path: '/serach',
          name: 'serach',
          component: () => import('../components/search/search.vue')
        }
      ]
    }
  
]
const router=new VueRouter({
  routes ,
  mode: 'history',
 

})
export default router