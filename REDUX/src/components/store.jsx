import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterslice"

const Store=configureStore({
    reducer:{
        counter:counterReducer,
    }
})

export default Store;