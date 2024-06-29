import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import cartReducer from "./Slices/cartSlice"


const rootReducer = combineReducers({

    auth:authReducer,
    cart:cartReducer

})

export default rootReducer;