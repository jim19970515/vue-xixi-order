import { createRouter, createWebHistory } from 'vue-router'
import Order from '../views/order.vue'
import { useOrderStore,useDetailsStore } from '@/stores/store'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'order',
            component: Order,
            async beforeEnter(to,from) {
                const orderStore = useOrderStore()
                await orderStore.getProduct()
            }
        },
        {
            path:'/CheckOut',
            name:'CheckOut',
            component:()=> import('../views/CheckOut.vue')
        },
        {
            path:'/Details',
            name:'Details',
            component:()=>import('../views/Details.vue'),
            async beforeEnter(to,from) {
                const detailsStore = useDetailsStore()
                await detailsStore.getDetailsData()
            }
        },
    ],
})

export default router
