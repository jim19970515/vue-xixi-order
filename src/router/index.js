import { createRouter, createWebHistory } from 'vue-router'
import Order from '../views/order.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'order',
            component: Order,
        },
        {
            path: '/SingleProduct/:id',
            name: 'SingleProduct',
            component: () => import('../views/SingleProduct.vue'),
            props: true,
        },
        {
            path:'/CheckOut',
            name:'CheckOut',
            component:()=> import('../views/CheckOut.vue')
        },
        {
            path:'/Details',
            name:'Details',
            component:()=>import('../views/Details.vue')
        },
        {
            path:'/OrderText',
            name:'OrderText',
            component:()=>import('../views/getOrderText.vue')
        },
        {
            path:'/GetOrder',
            name:'getOrder',
            component:()=>import('../views/getOrder.vue')
        }
    ],
})

export default router