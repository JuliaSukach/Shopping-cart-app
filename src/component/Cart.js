import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem } from "../features/cartSlice"

const Cart = () => {
    const numOfItems = useSelector(state => state.cart.numOfItems)
    const dispatch = useDispatch()
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Number of items in Cart: { numOfItems }</h2>
            <button className="mx-2.5 text-base tracking-widest font-normal text-white py-[23px] px-[50px] inline-block no-underline border-0 cursor-pointer bg-green-600" onClick={() => dispatch(addItem())}>Add Item to Cart</button>
            <button className="mx-2.5 text-base tracking-widest font-normal text-white py-[23px] px-[50px] inline-block no-underline border-0 cursor-pointer bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed" onClick={() => dispatch(removeItem())}>Remove Item from Cart</button>
        </div>
    )
}

export default Cart