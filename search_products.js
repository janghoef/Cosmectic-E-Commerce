import {StyleSheet, Text, View, ImageBackground, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, IMAGES} from '../../constant';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import SearchBar from '../../component/search_bar';
import Header from '../../component/custom_header';
import FastImage from 'react-native-fast-image';
import ProductHandler from './product_handler';
import RenderItem from '../../component/RenderItem';
import {searchProducts} from '../../Api/products';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import useDebounce from '../../hooks/useDebounce';

export default function SearchProducts(props) {
  const [filter, setFilter] = React.useState('');
  const debounce=useDebounce(filter,1000)
  const {data, isLoading, error, fetchNextPage, hasNextPage} = useInfiniteQuery(
    {
      queryKey: ['searchProducts', debounce],
      queryFn: ({pageParam}) => searchProducts(pageParam, debounce),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    },
  );
  const Products = data?.pages?.flat();
  return (
    <FastImage style={styles.container} source={IMAGES.Bg}>
      <Header title={'Search Products'} back={0} />
      <View style={{paddingHorizontal: wp(3)}}>
        <SearchBar
          placeholder={'Write here to search product'}
          onChangeText={setFilter}
          value={filter}
        />
      </View>
      <View style={styles.container1}>
        <FlatList
          data={Products}
          numColumns={2}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: hp(10),
            paddingHorizontal: wp(3),
            gap: 5,
          }}
          bounces={false}
          columnWrapperStyle={{gap: 5}}
          onEndReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
        />
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
    marginTop: hp(2),
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

const data = [
  {
    id: 1,
    image:
      'https://innovativecosmeticdesigns.com/wp-content/uploads/2023/07/IMG_0518-2-scaled.jpg',
    title: 'Lasting Finish',
    price: 50.2,
    netPrice: 37.5,
    rating: 4,
  },
  {
    id: 2,
    image:
      'https://innovativecosmeticdesigns.com/wp-content/uploads/2023/07/White_Box_03-video-converter.com_-1000x1000.gif',
    title: 'Lasting Finish',
    price: 50.3,
    netPrice: 37.6,
    rating: 4,
  },
  {
    id: 3,
    image:
      'https://innovativecosmeticdesigns.com/wp-content/uploads/2023/07/2-4.jpg',
    title: 'Lasting Finish',
    price: 50.3,
    netPrice: 37.0,
    rating: 4,
  },
  {
    id: 4,
    image:
      'https://innovativecosmeticdesigns.com/wp-content/uploads/2023/10/2.jpg',
    title: 'Lasting Finish',
    price: 50.3,
    netPrice: 37.45,
    rating: 4,
  },
  {
    id: 5,
    image:
      'https://innovativecosmeticdesigns.com/wp-content/uploads/2023/11/imgpsh_fullsize_anim-2.jpg',
    title: 'Lasting Finish',
    price: 50.3,
    netPrice: 37.0,
    rating: 4,
  },
  {
    id: 6,
    image:
      'https://innovativecosmeticdesigns.com/wp-content/uploads/2023/06/1.1.jpg',
    title: 'Lasting Finish',
    price: 50.3,
    netPrice: 37.45,
    rating: 4,
  },
];
