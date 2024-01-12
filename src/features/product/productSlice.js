import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fechAllProducts, fechProductsByFilter ,fechProductsBySort } from './productAPI';

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

export const fechProductsByFilterAsync = createAsyncThunk(
  'product/fechProductsByFilter',
  async (filter) => {
    const response = await fechProductsByFilter(filter);
    return response.data;
  }
);

export const fechProductsBySortAsync = createAsyncThunk(
  'product/fechProductsBySort',
  async (sort,order) => {
    // console.log(sort)
    const response = await fechProductsBySort(sort,order);
    console.log(response.data)
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
      .addCase(fechProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fechProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fechProductsBySortAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fechProductsBySortAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;