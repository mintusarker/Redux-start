import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBrand, toggleStock } from '../redux/actionCreator/filterAction';
import { loadProduct } from '../redux/actionCreator/ProductAction';
import loadProductData from '../redux/thunk/product/fetchProduct';
import ProductCard from './Product/ProductCard';

const Home = () => {
    // const [products, setProducts] = useState([]);
    // console.log(products)
    const state = useSelector((state) => state.filter);
    const products = useSelector((state) => state.product.products);
    const { brands, stock } = state.filters;
    // console.log(brands, stock);
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(loadProductData());
        // fetch('http://localhost:5000/products')
        // .then(data => data.json())
        // .then(data => dispatch(loadProduct(data)))
        }, [])


    const activeClass = "text-white bg-indigo-500 border-white"

    let content;

    if (products.length) {
        content = products.map(product => <ProductCard
            key={product._id}
            product={product}
        >
        </ProductCard>)
    }

    if (products.length && (stock || brands.length)) {
        content = products
            .filter(product => {
                if (stock) {
                    return product.status === true;
                }
                return product;
            })
            .filter(product => {
                if (brands.length) {
                    return brands.includes(product.brand);
                }
                return product;
            })
            .map(product => <ProductCard
                key={product._id}
                product={product}
            >
            </ProductCard>)
    }


    return (
        <div className='gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5 mr-16'>
                <button onClick={() => dispatch(toggleStock())} className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} }`}>
                    In Stock
                </button>
                <button onClick={() => dispatch(toggleBrand('amd'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}>
                    Amd
                </button>
                <button onClick={() => dispatch(toggleBrand('intel'))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}>
                    Intel
                </button>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-24 mt-10'>
                {
                    content
                }
            </div>
        </div>
    );
};

export default Home;