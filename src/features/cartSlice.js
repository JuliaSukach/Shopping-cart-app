import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfItems: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: state => {
            state.numOfItems += 1
        },
        removeItem: state => {
            state.numOfItems = Math.max(state.numOfItems - 1, 0)
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer