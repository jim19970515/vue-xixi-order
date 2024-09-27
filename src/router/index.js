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
    ],
})

export default router
