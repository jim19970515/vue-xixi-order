import { createRouter, createWebHistory } from 'vue-router'
import Order from '../views/order.vue'
import TableSelection from '../views/TableSelection.vue'
import SelectTable from '@/views/SelectTable.vue'
import camera from '../components/camera.vue'
import { useOrderStore } from '@/stores/store'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'TableSelection',
            component: TableSelection,
            redirect: '/SelectTable',
            children:[
                {
                    path:'SelectTable',
                    name:'SelectTable',
                    component: SelectTable
                },
                {
                    path: 'Camera',
                    name: 'Camera',
                    component: camera
                },
            ]
        },
        {
            path: '/Order/:id',
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
            path:'/Details/:id',
            name:'Details',
            component:()=>import('../views/Details.vue'),
        },
    ],
})

export default router
