import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    numOfItems: 0,
    currency: '€'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseItem: (state, action) => {
            const product = action.payload
            const existingItem = state.items.find(item => item.id === product.id)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...product, quantity: 1 })
            }
            state.numOfItems += 1
        },
        decreaseItem: (state, action) => {
            const product = action.payload
            const existingItem = state.items.find(item => item.id === product.id)
            if (existingItem) {
                existingItem.quantity -= 1
            } 
            if (existingItem.quantity === 0) {
                state.items = state.items.filter(item => item.id !== product.id)
            }
            state.numOfItems = Math.max(state.numOfItems - 1, 0)
        },
        removeItem: (state, action) => {
            const product = action.payload
            const quantity = product.quantity
            state.items = state.items.filter(item => item.id !== product.id)
            state.numOfItems -= quantity
        }
    }
})

export const { increaseItem, decreaseItem, removeItem } = cartSlice.actions

export default cartSlice.reducer