import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CONSTANTS} from '../../constant';
import postService from '../services/post.service';
import getService from '../services/get.service';
import {hideLoading, showLoading} from './loading';
import {saveProfileData} from './profile';

const initialState = {
  accessToken: null,
  isLoading: false,
  userData: null,
};

export const signUp = createAsyncThunk(
  CONSTANTS.API_URLS.SIGN_UP,
  async (data, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await postService.post(
        thunk,
        CONSTANTS.API_URLS.SIGN_UP,
        data.formData,
      );
      // const formData = new FormData();
      // formData.append('username', data.signUpData.email);
      // formData.append('password', data.signUpData.password);
      // const response1 = await postService.post(
      //   thunk,
      //   CONSTANTS.API_URLS.LOGIN,
      //   formData,
      // );
      thunk.dispatch(hideLoading());
      thunk.dispatch(saveProfileData(response));
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      throw error;
    }
  },
);
export const login = createAsyncThunk(
  CONSTANTS.API_URLS.LOGIN,
  async (formdata, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await postService.post(
        thunk,
        CONSTANTS.API_URLS.LOGIN,
        formdata,
      );

      let params = {
        email: response?.user_email,
      };
      const response1 = await getService.get(
        CONSTANTS.API_URLS.SIGN_UP,
        params,
      );

      thunk.dispatch(hideLoading());
      thunk.dispatch(saveProfileData(response1[0]));
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      throw error;
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserdata: (state, action) => {
      state.userData = action.payload;
    },
    removeUserdata: (state, action) => {
      state.userData = null;
    },
  },
});

export const {saveUserdata, removeUserdata} = authSlice.actions;
export default authSlice.reducer;
