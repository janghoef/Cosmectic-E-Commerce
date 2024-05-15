import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CONSTANTS} from '../../constant';
import getService from '../services/get.service';
import postService from '../services/post.service';
import {hideLoading, showLoading} from './loading';
import utills from '../../utills';

const initialState = {
  orderHistory: [],
  orderData: null,
  completeTask: ['My Cart'],
  status: 'My Cart',
};

export const createOrderPayments = createAsyncThunk(
  CONSTANTS.API_URLS.CREATE_ORDER_PAYMENT,
  async (formdata, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await postService.post(
        thunk,
        CONSTANTS.API_URLS.CREATE_ORDER_PAYMENT,
        formdata,
      );
      thunk.dispatch(hideLoading());
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());

      throw error;
    }
  },
);
export const createOrder = createAsyncThunk(
  CONSTANTS.API_URLS.CREATE_ORDER,
  async (formdata, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await postService.post(
        thunk,
        CONSTANTS.API_URLS.CREATE_ORDER,
        formdata,
      );
      thunk.dispatch(hideLoading());
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      console.log('error', error);

      throw error;
    }
  },
);
export const getOrderHistory = createAsyncThunk(
  CONSTANTS.API_URLS.CREATE_ORDER,
  async (params, thunk) => {
    try {
      thunk.dispatch(showLoading());
      let data = params?.page > 1 ? thunk.getState().order?.orderHistory : [];
      const response = await getService.get(
        CONSTANTS.API_URLS.CREATE_ORDER,
        params,
      );

      thunk.dispatch(saveOrderHistory(data?.concat(response)));
      thunk.dispatch(hideLoading());
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      console.log('error', error);
      //   utills.errorAlert(error.message);
      throw error;
    }
  },
);

export const applyCoupon = createAsyncThunk(
  CONSTANTS.API_URLS.APPLY_COUPON,
  async (id, thunk) => {
    try {
      const response = await getService.get(
        `${CONSTANTS.API_URLS.APPLY_COUPON}`,
        undefined,
      );

      return response;
    } catch (error) {
      console.log('error', error);

      throw error;
    }
  },
);
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveOrderHistory: (state, action) => {
      state.orderHistory = action.payload;
    },
    saveOrderData: (state, action) => {
      state.orderData = action.payload;
    },
    saveCompleteTask: (state, action) => {
      state.status = action.payload;
      let tempData = state.completeTask;
      if (!state.completeTask.includes(action.payload)) {
        tempData.push(action.payload);
        state.completeTask = tempData;
      }
    },
    resetCompleteTask: (state, action) => {
      state.completeTask = ['My Cart'];
      state.status = 'My Cart';
    },
  },
});

export const {
  saveOrderHistory,
  saveOrderData,
  saveCompleteTask,
  saveStatus,
  resetCompleteTask,
} = orderSlice.actions;
export default orderSlice.reducer;
