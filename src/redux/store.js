import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartCounter from "./middleware/cartCounter";
import rootReducer from "./reducer/rootReducer";

//
const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(cartCounter, thunk, logger)));

export default store;