import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetails = createAsyncThunk(
  "user/fetchProductDetails",
  async () => {
    try {
      const response = await axios.get("./fakedata.json");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  userProfiles: [],
  loading: false,
  error: null,
  imageOrder: [],
  selectedImages: [],
  deleteMode: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleImageSelection: (state, action) => {
      const index = action.payload;
      const isSelected = state.selectedImages.includes(index);
      if (isSelected) {
        state.selectedImages = state.selectedImages.filter((i) => i !== index);
      } else {
        state.selectedImages.push(index);
      }
    },
    deleteSelectedImages: (state) => {
      // Filter out the selected images from imageOrder
      state.imageOrder = state.imageOrder.filter(
        (num, index) => !state.selectedImages.includes(index)
      );
      state.selectedImages = [];
      state.deleteMode = false;
    },
    toggleDeleteMode: (state) => {
      state.deleteMode = !state.deleteMode;
      state.selectedImages = [];
    },
    updateImageOrder: (state, action) => {
      state.imageOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfiles = action.payload;
        state.imageOrder = [...Array(action.payload.length).keys()];
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  toggleImageSelection,
  deleteSelectedImages,
  toggleDeleteMode,
  updateImageOrder,
} = userSlice.actions;

export const selectUserProfiles = (state) => state.user.userProfiles;

export default userSlice.reducer;
