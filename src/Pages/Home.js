import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './Product/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(data => data.json())
            .then(data => setProducts(data))
    }, [])

    const state = useSelector((state) => state)
    console.log(state);
    
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-32 mt-10'>
            {
                products.map(product => <ProductCard
                key={product._id}
                    product={product}
                >
                </ProductCard>)
            }
        </div>
    );
};

export default Home;