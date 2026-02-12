import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        ON_LOGIN: (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
        },

        ON_LOGOUT: (state) => {
            state.currentUser = null;
            localStorage.removeItem("currentUser");
        },
    },
});

export const { ON_LOGIN, ON_LOGOUT } = authSlice.actions;
export default authSlice.reducer;
