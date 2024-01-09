import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fechAllProducts } from './productAPI';

const initialState = {
  products: [],
  status: 'idle',
};


export const fetchAllProductsAsync = createAsyncThunk(
  'product/fechAllProducts',
  async () => {
    const response = await fechAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);




export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducer: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;