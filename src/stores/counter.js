import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
    const tableNumber = ref(null)
    return { tableNumber }
})
