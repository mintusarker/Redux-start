import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
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
            },
            
        ]
    }
])


export default router;