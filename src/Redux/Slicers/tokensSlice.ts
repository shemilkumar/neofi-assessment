import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Stoke } from "../../App";

interface initialStateProps {
  allTokens: Stoke[];
}

const initialState: initialStateProps = {
  allTokens: [],
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setAllTokens: (
      state: initialStateProps,
      action: PayloadAction<Stoke[]>
    ) => {
      state.allTokens = action.payload;
    },
  },
});

export const { setAllTokens } = tokensSlice.actions;
export default tokensSlice.reducer;
