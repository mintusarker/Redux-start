import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Cart = () => {

    const state = useSelector((state) => state.product.cart)

    // console.log(state)

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-32 mt-10'>
            {
                state?.sort((a, b) => a.cartPosition - b.cartPosition).map(product => <ProductCard
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Cart;