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
import Travel from '@/components/Travel'
import Play from '@/components/Play'
import Cook from '@/components/Cook'
import Stationery from '@/components/Stationery'
import Clothes from '@/components/Clothes'
import Interest from '@/components/Interest'
import Accessories from '@/components/Accessories'
import Arts from '@/components/Arts'
import Sports from '@/components/Sports'
import Book from '@/components/Book'
import Numeral from '@/components/Numeral'
import Shoes from '@/components/Shoes'
import All from '@/components/All'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'Shop',
      component: Shop,
      children:[
        {
          path:'/Index',
          name:'Index',
          component:Index
        },
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
        {
          path:'/Travel',
          name:'Travel',
          component:Travel
        },
        {
          path:'/Play',
          name:'Play',
          component:Play
        },
        {
          path:'/Cook',
          name:'Cook',
          component:Cook
        },
        {
          path:'/Stationery',
          name:'Stationery',
          component:Stationery
        },
        {
          path:'/Clothes',
          name:'Clothes',
          component:Clothes
        },
        {
          path:'/Interest',
          name:'Interest',
          component:Interest
        },
        {
          path:'/Accessories',
          name:'Accessories',
          component:Accessories
        },
        {
          path:'/Arts',
          name:'Arts',
          component:Arts
        },
        {
          path:'/Sports',
          name:'Sports',
          component:Sports
        },
        {
          path:'/Book',
          name:'Book',
          component:Book
        },
        {
          path:'/Numeral',
          name:'Numeral',
          component:Numeral
        },
        {
          path:'/Shoes',
          name:'Shoes',
          component:Shoes
        },
        {
          path:'/All',
          name:'All',
          component:All
        }
      ],
      redirect:"/Index"

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
