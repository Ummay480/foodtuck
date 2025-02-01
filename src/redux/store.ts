import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"; // ✅ Correct import

export const store = configureStore({
  reducer: {
    cart: cartReducer, // ✅ Assign it to 'cart'
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
