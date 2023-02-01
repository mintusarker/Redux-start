import React from 'react';
import { useProducts } from '../../Context/ProductProvider';
import ProductCard from './ProductCard';

const WishList = () => {
    const { state: {wishlist, loading, error} } = useProducts();
   
    if (loading) {
        return <p>loading</p>
    };

    if (error) {
       return <p>Something went wrong!!</p>
    };

    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                wishlist.map(product => <ProductCard
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default WishList;