import { useDispatch, useSelector } from "react-redux"
import products from "../products"
import { increaseItem } from "../features/cartSlice"

const ProductList = ({ toggleCart, isCartOpen }) => {
    const currency = useSelector(state => state.cart.currency)
    const dispatch = useDispatch()
    const handleClick = (product) => {
        dispatch(increaseItem(product))
        if (!isCartOpen) {
            toggleCart()
        }
    }
    return (
        <div className={`flex flex-row mx-20 ${isCartOpen ? "blur-sm" : ""}`}>
            {products.map(product => {
                return (
                    <div className={`${!isCartOpen ? "group" : ""} flex flex-col w-[calc(25% - 0.9375rem)] mx-3`} key={product.id}>
                        <div>
                            <img src={product.image}></img>
                        </div>
                        <div className="relative mx-auto bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-300">
                            <button className="border-white rounded-lg border-2 width p-1.5 text-xs text-white hover:bg-white hover:text-black" onClick={() => handleClick(product)}>ADD + </button>
                        </div>
                        <div className="font-circle text-[#666] text-center text-xs my-2">{product.category} - {product.amount}</div>
                        <div className="font-circleBold text-center mb-2 px-2 uppercase">{product.name}</div>
                        <div className="font-circleBold text-center">{currency}{product.price}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList