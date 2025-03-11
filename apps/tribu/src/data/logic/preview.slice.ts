import { createSlice } from "@reduxjs/toolkit";
import { AllFormInterfacesType } from "../types/all_form_types";

type PreviewSlice = {
  previewItems: AllFormInterfacesType[];
  currentIndex: number;
};

const initialState: PreviewSlice = {
  previewItems: [],
  currentIndex: 0,
};

export const PreviewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    setPreviewItems: (state, action) => {
      const newArray = action.payload;
      state.previewItems = newArray;
    },

    updatePreviewItem: (state, action) => {
      const newArray = action.payload;
      state.previewItems[newArray.index] = newArray;
    },

    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setPreviewItems, setCurrentIndex, updatePreviewItem } =
  PreviewSlice.actions;
export default PreviewSlice.reducer;
