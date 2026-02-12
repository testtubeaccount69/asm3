import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import popupReducer from "./popupSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        popup: popupReducer,
        auth: authReducer,
    },
});

export default store;