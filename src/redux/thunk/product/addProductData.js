import { addProduct } from "../../actionCreator/ProductAction";

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/products", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json"
            }
        });
        const data = await res.json()
        dispatch(addProduct(product))
    }
}


export default addProductData;