import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CONSTANTS} from '../../constant';
import getService from '../services/get.service';
import postService from '../services/post.service';
import {hideLoading, showLoading} from './loading';

const initialState = {
  ProfileData: null,
  Content: [],
};
export const getProfileData = createAsyncThunk(
  CONSTANTS.API_URLS.GET_PROFILE,
  async (userData, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const params = {
        email: userData.user_email,
      };
      const response = await getService.get(
        CONSTANTS.API_URLS.GET_PROFILE,
        undefined,
        userData.token,
      );
      const response1 = await getService.get(
        `${CONSTANTS.API_URLS.GET_CUSTOMER}`,
        params,
      );
      thunk.dispatch(saveProfileData(response1));
      return response1;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  },
);
export const getContentData = createAsyncThunk(
  CONSTANTS.API_URLS.GET_CONTENT,
  async (userData, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await getService.get(
        CONSTANTS.API_URLS.GET_CONTENT,
        undefined,
      );
      thunk.dispatch(saveContentData(response));
      return response;
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  },
);
export const updateProfileData = createAsyncThunk(
  CONSTANTS.API_URLS.UPDATE_PROFILE,
  async (data, thunk) => {
    try {
      thunk.dispatch(showLoading());
      const response = await postService.post(
        thunk,
        `${CONSTANTS.API_URLS.UPDATE_PROFILE}${data.id}`,
        data.formdata,
      );
      thunk.dispatch(hideLoading());
      thunk.dispatch(saveProfileData(response));
      return response;
    } catch (error) {
      thunk.dispatch(hideLoading());
      console.log('error', error);
      throw error;
    }
  },
);
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfileData: (state, action) => {
      state.ProfileData = action.payload;
    },
    saveContentData: (state, action) => {
      state.Content = action.payload;
    },
  },
});

export const {saveProfileData, saveContentData} = profileSlice.actions;
export default profileSlice.reducer;
