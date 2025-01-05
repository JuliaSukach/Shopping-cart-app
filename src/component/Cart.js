import { useSelector, useDispatch } from "react-redux"
import { increaseItem, decreaseItem, removeItem } from "../features/cartSlice"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cart = ({ toggleCart }) => {
    const { numOfItems, currency } = useSelector(state => state.cart)
    const selectedItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    return (
        <div className="absolute right-0 top-0 bg-[#eae7d6] h-full w-[min(90%,_45rem)]">
            <div className="my-10 mx-5 flex flex-row justify-between">
                <div>
                    <p className="uppercase">Items [{numOfItems}]</p>
                </div>
                <div className="flex flex-row">
                    <div className="mx-16 uppercase">cart</div>
                    <div>
                        <button onClick={toggleCart}>X</button>
                    </div>
                </div>
            </div>
            <>
                {selectedItems.length === 0 ? (
                    <div className="mx-5">Your cart is currently empty.</div>
                ) : (selectedItems.map(product => {
                    return (
                        <div className="grid grid-cols-[max(33%,_6.938rem)_auto] gap-2 border-t p-5 lg:grid-cols-[max(17.6%,_7.375rem)_auto] lg:gap-3.5" key={product.id}>
                            <div>
                                <img src={product.image}></img>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-circle text-[#666] text-xs">{product.category} - {product.amount}</p>
                                <div className="flex flex-row justify-between font-circle text-sm">
                                    <div>{product.name}</div>
                                    <div>{currency}{product.price * product.quantity}</div>
                                </div>
                                <div className="flex flex-row justify-center w-[100px] mt-10 ml-5">
                                    <button aria-label="Increase quantity" disabled={product.quantity < 2} className="px-5 " onClick={() => dispatch(decreaseItem(product))}>
                                        <svg className="text-current size-3" xmlns="http://www.w3.org/2000/svg" viewBox="71.6 10.1 6 1.4">
                                            <path className={product.quantity < 2 ? 'stroke-[#d7d5ce]' : 'stroke-[#000]'} xmlns="http://www.ws3.org/2000/svg" d="M75.2 10.2c1.9-.2 2.5-.2 2.5.3 0 .9-1.7.7-2.5.7l-2.9.2c-.3 0-.6-.1-.6-.3-.3-.5.2-.9.5-1 .8 0 1.5.2 3 0Z" ></path>
                                        </svg>
                                    </button>
                                    <span className="px-1">{product.quantity}</span>
                                    <button aria-label="Decrease quantity" className="px-5" onClick={() => dispatch(increaseItem(product))}>
                                        <svg class="text-current size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M6 11c-1 .4-2 .5-2.8.6-1.3.3-3 0-3-1C-.2 9 1 8.3 2.6 8c3.4-.5 4.9-1.2 4.9-5 0-.7-.2-3.1 1.2-3.1 1.1 0 1.5 1 1.5 3.8 0 2.7-.1 3 2.1 2.6l5.8-1c.9 0 1.7 0 1.7 1.2s-.5 1.6-1.4 1.8c-1.8.6-3.6.5-5.7 1-3 .6-3.6 1.3-3.6 4.4V18c0 1-.3 2-1.2 2-1.3 0-1.5-1.3-1.6-1.8-.3-2-.3-4.3-.4-7.1Zm0 0"></path>
                                        </svg>
                                    </button>
                                    <button onClick={() => dispatch(removeItem(product))}>
                                        <DeleteOutlineOutlinedIcon/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }))}
            </>
        </div>
    )
}

export default Cart