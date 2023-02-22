import { loadProduct } from "../../actionCreator/ProductAction";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        dispatch(loadProduct(data))
    }
}


export default loadProductData;