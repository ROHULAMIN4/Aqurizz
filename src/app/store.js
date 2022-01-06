import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../fetures/productsSlice";
// import singleProductReducer from "../features/singleProductSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    // singleProduct: singleProductReducer,
  },
});
