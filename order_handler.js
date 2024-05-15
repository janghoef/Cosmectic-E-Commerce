import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import {getOrderHistory} from '../../redux/slices/order';

export default function OrderHandler() {
  const {dispatch, getState} = useReduxStore();
  const {ProfileData} = getState('profile');
  const {orderHistory} = getState('order');
  const {isLoading} = getState('loading');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);
  // const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    // loadOrderHistory();
  }, []);
  const loadOrderHistory = () => {
    const params = {
      customer: ProfileData?.id,
      page: 1,
      per_page: 10,
    };
    dispatch(getOrderHistory(params))
      .unwrap()
      .then(response => {
        setLoading(false);
        // setOrderHistory(response);
        // console.log('loadOrderHistory response', response?.length);
      })
      .catch(err => {
        setLoading(false);
        console.log('loadOrderHistory err', err);
      });
  };
  const loadMore = () => {
    let nextPage = page + 1;
    const params = {
      customer: ProfileData?.id,
      page: nextPage,
      per_page: 10,
    };

    if (loadingData) {
      dispatch(getOrderHistory(params))
        .unwrap()
        .then(response => {
          if (response.length > 0) {
            setLoadingData(true);
            setPage(nextPage);
            // setOrderHistory(prev => [...prev, response]);
          } else {
            setLoadingData(false);
          }
          // console.log('loadOrderHistory response', response?.length);
        })
        .catch(err => {
          setLoadingData(false);
          console.log('loadOrderHistory err', err);
        });
    }
  };

  return {orderHistory, loading, loadMore,ProfileData};
}

const styles = StyleSheet.create({});
