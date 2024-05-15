import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS, IMAGES} from '../../constant';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import HomeHeader from '../../component/home_header';
import FastImage from 'react-native-fast-image';
import ProductHandler from './product_handler';
import RecommendedSkeleton from '../../skeleton/recommendedSkeleton';
import RenderItem from '../../component/RenderItem';
import {fetchRecommondedProducts} from '../../Api/products';
import {useInfiniteQuery} from '@tanstack/react-query';
import Header from '../../component/custom_header';
export default function SeeAllProducts(props) {
  const {ProfileData} = ProductHandler(props);
  const {
    data,
    isLoading: AllProductsLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['allRecommendedProducts'],
    initialPageParam: 1,
    queryFn: ({pageParam}) => fetchRecommondedProducts(pageParam, 10),
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const AllRecommondedProducts = data?.pages?.flat();
  const renderFooter = () => {
    if (!AllProductsLoading) return null;
    return <ActivityIndicator size="small" color={COLORS.primary} />;
  };

  return (
    <FastImage style={styles.container} source={IMAGES.Bg}>
      {/* <HomeHeader
        title={ProfileData?.first_name}
        location={ProfileData?.billing.address_1}
        back={0}
      /> */}
<Header title={'Recommended Products'} back={0} />
      <View style={styles.container1}>
        <Text style={styles.txt2}>{`Recommended for you `}</Text>
        {AllProductsLoading ? (
          <RecommendedSkeleton />
        ) : (
          <FlatList
            data={AllRecommondedProducts}
            numColumns={2}
            renderItem={renderItem}
            contentContainerStyle={{
              paddingBottom: hp(10),
              paddingHorizontal: wp(3),
            }}
            initialNumToRender={5}
            onEndReachedThreshold={0.1}
            onEndReached={data => {
              if (hasNextPage) {
                fetchNextPage();
              }
            }}
            ListFooterComponent={renderFooter}
          />
        )}
      </View>
    </FastImage>
  );
}

const renderItem = ({item, index}) => {
  return <RenderItem item={item} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),

    // paddingHorizontal: wp(4),
  },
  txt2: {
    color: COLORS.primary,
    fontSize: rf(2.5),
    fontWeight: 'bold',
    marginTop: hp(1.2),
    paddingLeft: wp(3),
  },
});
