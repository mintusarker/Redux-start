import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import About from "../Pages/About";
import AddProduct from "../Pages/dashboard/AddProduct";
import ProductList from "../Pages/dashboard/ProductList";
import Home from "../Pages/Home";
import Cart from "../Pages/Product/Cart";
import WishList from "../Pages/Product/WishList";
import TopRated from "../Pages/TopRated";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/top-rated',
                element: <TopRated></TopRated>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/wishlist',
                element: <WishList></WishList>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/productList',
                element: <ProductList></ProductList>
            }
        ]
    }
])



export default router;