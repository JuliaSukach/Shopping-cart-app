import { useDispatch } from "react-redux"
import products from "../products"
import { addItem } from "../features/cartSlice"

const ProductList = () => {
    const dispatch = useDispatch()
    return (
        <div className="flex flex-row mx-20">
            {products.map(product => {
                return (
                    <div className="group flex flex-col w-[calc(25% - 0.9375rem)] mx-3" key={product.id}>
                        <div>
                            <img src={product.image}></img>
                        </div>
                        <div className="relative mx-auto bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-300">
                            <button className="border-white rounded-lg border-2 width p-1.5 text-xs text-white hover:bg-white hover:text-black" onClick={() => dispatch(addItem())}>ADD + </button>
                        </div>
                        <div className="font-circle text-[#666] text-center text-xs my-2">Body cream - {product.amount}</div>
                        <div className="font-circleBold text-center mb-2 px-2 uppercase">{product.name}</div>
                        <div className="font-circleBold text-center">{product.price}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList