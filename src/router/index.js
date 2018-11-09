import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import Shoping from '@/components/Shoping'
import Person from '@/components/Person'
import Shop from '@/components/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Shop',
      component: Shop
    },
    {
      path:'/Shoping',
      name: 'Shoping',
      component: Shoping
    },
    {
      path:'/Category',
      name: 'Category',
      component: Category
    },
    {
      path:'/Person',
      name: 'Person',
      component: Person
    }
  ]
})
