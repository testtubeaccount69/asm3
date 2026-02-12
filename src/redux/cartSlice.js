import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_CART: (state, action) => {
            const item = action.payload;

            const exist = state.listCart.find(
                (product) => product._id === item._id
            );

            if (exist) {
                exist.quantity += item.quantity;
            } else {
                state.listCart.push(item);
            }

            localStorage.setItem("cart", JSON.stringify(state.listCart));
        },

        UPDATE_CART: (state, action) => {
            const { _id, quantity } = action.payload;

            const product = state.listCart.find(
                (item) => item._id === _id
            );

            if (product) {
                product.quantity = Math.max(1, quantity);
            }

            localStorage.setItem("cart", JSON.stringify(state.listCart));
        },

        DELETE_CART: (state, action) => {
            state.listCart = state.listCart.filter(
                (item) => item._id !== action.payload
            );

            localStorage.setItem("cart", JSON.stringify(state.listCart));
        },
    },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART } = cartSlice.actions;
export default cartSlice.reducer;

