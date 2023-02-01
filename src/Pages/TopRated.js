import React from 'react';
import { useProducts } from '../Context/ProductProvider';
import ProductCard from './Product/ProductCard';

const TopRated = () => {
    const { state: { products }, loading,  error } = useProducts()

   
    if (loading) {
        return <p>loading</p>
    };

    if (error) {
       return <p>Something went wrong!!</p>
    };

    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                products.filter((product => product.rating >= 4)).map(product => <ProductCard
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default TopRated;