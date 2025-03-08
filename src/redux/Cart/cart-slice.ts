import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/product";

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
};

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addProduct: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload.id);
        },
        buyProduct: (state) => {
            state.cart = [];
        },
    },
});

export const { addProduct, removeProduct, buyProduct } = cartSlice.actions;
export default cartSlice.reducer;
