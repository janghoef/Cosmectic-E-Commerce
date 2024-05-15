import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  getAllProducts,
  getRecommendedProducts,
} from '../../../redux/slices/products';
import {CONSTANTS} from '../../../constant';
import useReduxStore from '../../../hooks/useReduxStore';
import {getContentData, getProfileData} from '../../../redux/slices/profile';
import {resetCompleteTask} from '../../../redux/slices/order';
import {
  fetchAllProducts,
  fetchRecommondedProducts,
} from '../../../Api/products';
import {useQuery} from '@tanstack/react-query';
import { hideLoading } from '../../../redux/slices/loading';

const HomeHandler = () => {
  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('auth');
  const {ProfileData} = getState('profile');
  const {
    data: AllProducts,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ['allProducts'],
    queryFn: fetchAllProducts,
  });
  const {data: RecommendedProducts} = useQuery({
    queryKey: ['recommendedProducts'],
    queryFn:()=> fetchRecommondedProducts(1),
  });
  useEffect(() => {
    // loadProfileData();
    dispatch(resetCompleteTask());
    dispatch(hideLoading())
  }, []);

  const loadProfileData = () => {
    dispatch(getProfileData(userData))
      .unwrap()
      .then(response => {
        // console.log('loadProfileData response', response);
      })
      .catch(err => {
        console.log('loadProfileData err', err);
      });
  };
  return {
    AllProducts,
    RecommendedProducts,
    loading,
    userData,
    ProfileData,
    error,
  };
};

export default HomeHandler;

const styles = StyleSheet.create({});
