import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CONSTANTS} from '../../constant';
import getService from '../services/get.service';
import {hideLoading, showLoading} from './loading';
const initialState = {
  AllProducts: [],
  RecommendedProducts: [],
};

export const getAllProducts = createAsyncThunk(
  CONSTANTS.API_URLS.GET_ALL_PRODUCT,
  async (param, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await getService.get(CONSTANTS.API_URLS.GET_ALL_PRODUCT);
      thunk.dispatch(saveAllProducts(response));
      thunk.dispatch(hideLoading());
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      throw error;
    }
  },
);

export const getRecommendedProducts = createAsyncThunk(
  CONSTANTS.API_URLS.GET_RECOMMENDED_PRODUCT,
  async (params, thunk) => {
    try {
      thunk.dispatch(showLoading())
      const response = await getService.get(
        CONSTANTS.API_URLS.GET_RECOMMENDED_PRODUCT,
        params,
      );
      thunk.dispatch(saveRecommendedProducts(response));
      thunk.dispatch(hideLoading());
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      throw error;
    }
  },
);

export const getProductsDetails = createAsyncThunk(
  CONSTANTS.API_URLS.GET_PRODUCT_DETAILS,
  async (params, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await getService.get(
        `${CONSTANTS.API_URLS.GET_PRODUCT_DETAILS}${params}`,
      );
      thunk.dispatch(hideLoading());
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      throw error;
    }
  },
);
export const searchProducts = createAsyncThunk(
  CONSTANTS.API_URLS.GET_ALL_PRODUCT,
  async (params, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await getService.get(
        CONSTANTS.API_URLS.GET_ALL_PRODUCT,
        params,
      );

      thunk.dispatch(hideLoading());
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      throw error;
    }
  },
);

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    saveAllProducts: (state, action) => {
      state.AllProducts = action.payload;
    },
    saveRecommendedProducts: (state, action) => {
      state.RecommendedProducts = action.payload;
    },
  },
});

export const {saveAllProducts, saveRecommendedProducts} = productsSlice.actions;
export default productsSlice.reducer;
