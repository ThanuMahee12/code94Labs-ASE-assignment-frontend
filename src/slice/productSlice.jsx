// redux/productsSlice.js

import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an entity adapter
const productsAdapter = createEntityAdapter({
  // Optionally provide custom sorting or ids, otherwise it uses 'id' by default
  selectId: (product) => product.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name), // Example sorting by name
});

// Async thunks for API calls
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (page = 1) => {
    const response = await axios.get(`/api/products?page=${page}`);
    return response.data;  // Assuming the API returns a paginated response
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (productData) => {
    const response = await axios.post('/api/products', productData);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (updatedProduct) => {
    const response = await axios.put(`/api/products/${updatedProduct.id}`, updatedProduct);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    await axios.delete(`/api/products/${id}`);
    return id;  // Returning the ID for the deletion
  }
);

// Initial state
const initialState = productsAdapter.getInitialState({
  pagination: {
    page: 1,
    totalPages: 1,
    totalItems: 0,
  },
  status: 'idle',
  error: null,
});

// Create a slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add products to the entity state
        productsAdapter.setAll(state, action.payload.products);
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      
      // Handle add product
      .addCase(addProduct.fulfilled, (state, action) => {
        productsAdapter.addOne(state, action.payload);
      })
      
      // Handle update product
      .addCase(updateProduct.fulfilled, (state, action) => {
        productsAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      })
      
      // Handle delete product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        productsAdapter.removeOne(state, action.payload);
      });
  },
});

// Export actions and reducer
export const { setPagination } = productsSlice.actions;
export default productsSlice.reducer;

// Selectors to get normalized state
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors((state) => state.products);
