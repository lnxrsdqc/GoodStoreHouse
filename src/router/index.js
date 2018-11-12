import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/Category'
import Shoping from '@/components/Shoping'
import Person from '@/components/Person'
import Shop from '@/components/Shop'
import Water from '@/components/Water'
import HouseGoods from '@/components/HouseGoods'
import AestheticProtection from '@/components/AestheticProtection'
import Foods from '@/components/Foods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Shop',
      component: Shop,
      children:[
        {
          path:'/Water',
          name:'Water',
          component:Water
        },
        {
          path:'/HouseGoods',
          name:'HouseGoods',
          component:HouseGoods
        },
        {
          path:'/AestheticProtection',
          name:'AestheticProtection',
          component:AestheticProtection
        },
        {
          path:'/Foods',
          name:'Foods',
          component:Foods
        },

      ],
      redirect:"/"

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
