import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actionCreator/ProductAction";
import { RiDeleteBin2Line } from 'react-icons/ri'
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()
    const { pathname } = useLocation()

    return (
        <div
            className='shadow-lg rounded-3xl border relative p-3 flex flex-col text-indigo-900'
            key={product._id}>
            <p className="bg-rose-600 absolute top-1 rounded-full px-2 right-3 text-white">{product.quantity}</p>
            <div className='h-52 w-52 mx-auto'>
                <img src={product.image} alt={product.model} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.keyFeature.map((feature) => {
                        return <li key={feature} className='text-sm '>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>

                {pathname.includes("cart") && < button onClick={() => dispatch(removeFromCart(product))} className='bg-rose-500 rounded-full px-6 py-1 flex w-full items-center justify-between text-white text-bold'>
                    <p>Remove</p>
                    <RiDeleteBin2Line></RiDeleteBin2Line>
                </button>}

                {!pathname.includes("cart") && <button onClick={() => dispatch(addToCart(product))} className='bg-green-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                    Add to cart
                </button>}

                {!pathname.includes("cart") && <button title='Add to wishlist' className='bg-indigo-500  py-1 px-2 rounded-full'>
                    <BiListPlus className='text-white' />
                </button>}
            </div>
        </div >
    );
};

export default ProductCard;