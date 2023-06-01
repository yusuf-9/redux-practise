import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productreducer from "./products";
import userreducer from "./localusers";


const reducer = combineReducers({

    productreducer,
    userreducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;