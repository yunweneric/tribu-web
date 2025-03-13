import { createSlice } from "@reduxjs/toolkit";
import { GlobalTab } from "../enum";

interface TabState {
  currentGlobalTab: GlobalTab.CREATE | GlobalTab.PREVIEW | GlobalTab.SUBMISSION;
}

const initialState: TabState = {
  currentGlobalTab: GlobalTab.CREATE,
};
export const TabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.currentGlobalTab = action.payload;
    },
    getSelectedTab: (state) => {
      return state;
    },
  },
});

export const { setSelectedTab, getSelectedTab } = TabSlice.actions;
export default TabSlice.reducer;
