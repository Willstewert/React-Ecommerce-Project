import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const data = action.payload;
      const existingItem = state.cart.find((item) => item.id === data._id);
      console.log(existingItem);
      if (existingItem) {
        existingItem.totalPrice += data.price;
        existingItem.quantity++;
      } else {
        state.cart.push({
          id: data._id,
          image: data.image,
          name: data.name,
          price: data.price,
          quantity: 1,
          totalPrice: data.price,
        });
        console.log(state.totalQuantity);
      }

      state.totalQuantity++;
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
      state.totalQuantity--;
    },
    increment: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.totalPrice += existingItem.price;
        existingItem.quantity++;
      }
      state.totalQuantity++;
    },
    decrement: (state, action) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        existingItem.totalPrice -= existingItem.price;
        existingItem.quantity--;
      }

      state.totalQuantity--;
    },
  },
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
