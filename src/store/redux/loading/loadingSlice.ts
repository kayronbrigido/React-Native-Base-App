import { createSlice } from "@reduxjs/toolkit";
import { ILoadingState } from "@src/models/redux";


const initialState: ILoadingState = {
  isLoading: false,
  loadingCounter: 0
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingCounter += 1;
      state.isLoading = state.loadingCounter > 0;
    },
    stopLoading: (state) => {
      state.loadingCounter = Math.max(0, state.loadingCounter - 1);
      state.isLoading = state.loadingCounter > 0;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;