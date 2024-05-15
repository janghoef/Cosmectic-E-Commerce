import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, IMAGES} from '../../constant';
import Header from '../../component/custom_header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import OrderData from '../../component/OrderData';
import FastImage from 'react-native-fast-image';
import OrderHandler from './order_handler';
import CollapsibleView from '../../component/CollapsibleView';
import OrderHistorySkeleton from '../../skeleton/orderhistorySkeleton';
import {fetchOrderHistory} from '../../Api/order';
import {useInfiniteQuery} from '@tanstack/react-query';

const OrderHistory = () => {
  const {ProfileData} = OrderHandler();
  const {data, isLoading, error, fetchNextPage, hasNextPage} = useInfiniteQuery(
    {
      queryKey: ['orderHistory'],
      initialPageParam: 1,
      queryFn: ({pageParam}) => fetchOrderHistory(pageParam, ProfileData?.id),
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    },
  );
  const OrderHistory = data?.pages?.flat();
  return (
    <FastImage source={IMAGES.Bg} style={styles.background}>
      <Header back={0} title={'ORDER HISTORY'} />
      <View style={styles.container}>
        {isLoading ? (
          <OrderHistorySkeleton />
        ) : (
          <OrderData orderHistory={OrderHistory} loadMore={fetchNextPage} />
        )}
      </View>
    </FastImage>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    height: '100%',
    backgroundColor: COLORS.background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: hp(1),
  },
});
