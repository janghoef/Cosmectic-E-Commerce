// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CONSTANTS} from '../../constant';

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({baseUrl: CONSTANTS.API_URLS.BASE_URL}),
  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => CONSTANTS.API_URLS.CREATE_ORDER,
    }),
    getRecommendedProducts: builder.query({
      query: () => CONSTANTS.API_URLS.GET_RECOMMENDED_PRODUCT,
    }),

  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllProductsQuery,useGetRecommendedProductsQuery} = productsApi;
