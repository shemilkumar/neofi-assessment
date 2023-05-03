import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Stoke } from "../../App";

export interface initialStateProps {
  selectedToken: Stoke;
}

export const initialState: initialStateProps = {
  selectedToken: { symbol: "", price: 0 },
};

const selectedTokenSlice = createSlice({
  name: "selectedToken",
  initialState,
  reducers: {
    setSelectToken: (
      state: initialStateProps,
      action: PayloadAction<Stoke>
    ) => {
      state.selectedToken = action.payload;
    },
  },
});

export const { setSelectToken } = selectedTokenSlice.actions;
export default selectedTokenSlice.reducer;
