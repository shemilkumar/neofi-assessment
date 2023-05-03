import { configureStore } from "@reduxjs/toolkit";
import tokensReducer from "./Slicers/tokensSlice";
import selectedTokenReducer from "./Slicers/selectedTokenSlice";

const store = configureStore({
  reducer: {
    tokens: tokensReducer,
    selectedToken: selectedTokenReducer,
  },
});

export default store;
