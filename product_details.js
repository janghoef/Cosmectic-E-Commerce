import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, memo, useRef, useState, useEffect} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {COLORS, SCREENS} from '../../constant';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import BackArrow from '../../component/BackArrow';
import Icon, {Icons} from '../../component/icons';
import CustomButton from '../../component/CustomButton';
import ProductHandler from './product_handler';
import HTML from 'react-native-render-html';
import HomeSkeleton from '../../skeleton/productSkeleton';
import ProductSkeleton from '../../skeleton/productSkeleton';
import {getProductsVideo} from '../../Api/products';
import {useQuery} from '@tanstack/react-query';

export default function ProductsDetails(props) {
  let SwiperData;
  const {
    productDetail,
    isAddToCart,
    quantity,
    selectedColor,
    setSelectedColor,
    setQuantity,
    handleAddToCart,
    isLoading,
  } = ProductHandler(props);
  const {data: Video} = useQuery({
    queryKey: ['productVieo', productDetail?.id],
    queryFn: () => getProductsVideo(productDetail?.id),
  });

  if (Video?.video) {
    // SwiperData = [...productDetail.images, Video];
    SwiperData = productDetail.images
      .slice(0, 1)
      .concat(Video, productDetail.images.slice(1));
  } else {
    SwiperData = productDetail.images;
  }

  const renderItem = ({item}) => {
    let color = item.replace(/\s/g, '').toLowerCase();
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {borderWidth: selectedColor === item ? 1.3 : 0},
        ]}
        onPress={() => {
          setSelectedColor(item);
        }}>
        <View style={[styles.container4, {backgroundColor: color}]} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <ScrollView
          contentContainerStyle={{paddingBottom: hp(10)}}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={{}}>
            {SwiperData && <RenderSwiper data={SwiperData} />}
          </View>
          <View style={styles.container}>
            <View style={styles.container1}>
              <Text style={[styles.txt1, {width: wp(80)}]}>
                {productDetail?.name}
              </Text>
              <Text style={styles.txt1}>${productDetail?.price}</Text>
            </View>
            <AirbnbRating
              count={5}
              size={rf(2)}
              defaultRating={productDetail?.rating_count}
              showRating={false}
              starContainerStyle={{alignSelf: 'flex-start', marginTop: hp(1.2)}}
            />
            <HTML
              baseStyle={{color: COLORS.fontcolor}}
              source={{
                html:
                  productDetail !== '' ? productDetail?.short_description : '',
              }}
              contentWidth={wp(95)}
            />
            <HTML
              baseStyle={{color: COLORS.fontcolor}}
              source={{
                html: productDetail !== '' ? productDetail?.description : '',
              }}
              contentWidth={wp(95)}
            />
          </View>
          <View style={styles.container2}>
            <FlatList
              horizontal
              data={productDetail?.attributes?.[0]?.options}
              renderItem={renderItem}
              contentContainerStyle={{marginTop: hp(1)}}
              keyExtractor={item => item.toString()}
            />
            <View style={styles.quantityContainer}>
              <Text style={styles.txt1}>{`Quantity`}</Text>
              <View style={styles.addQuantityCOntainer}>
                <TouchableOpacity
                  onPress={() => {
                    setQuantity(quantity + 1);
                  }}>
                  <Icon
                    name={'plus'}
                    type={Icons.AntDesign}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
                <View style={styles.container3}>
                  <Text style={styles.txt3}>{quantity}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}>
                  <Icon
                    name={'minus'}
                    type={Icons.AntDesign}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <CustomButton
              text={isAddToCart ? 'View Cart' : 'Add to cart'}
              buttonStyle={{
                backgroundColor: isAddToCart ? COLORS.primary : COLORS.yellow,
              }}
              textColor={isAddToCart ? COLORS.yellow : COLORS.black}
              onPress={handleAddToCart}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const RenderVideo = memo(({item}) => {
  const playerRef = React.useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleVideoEnd = () => {
    // setIsPaused(false); // Pause the video when it ends
    // console.log('Video end');
    if (playerRef.current) {
      playerRef.current.seek(0); // Seek the video to the beginning // Play the video again
    }
  };
  const onPress = useCallback(() => {
    setIsPaused(prevState => !prevState);
  }, [isPaused]);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Video
        source={{
          uri: item.video,
        }}
        paused={isPaused}
        ref={playerRef}
        resizeMode={'cover'}
        onBuffer={buffer => {
          console.log('buffer===', buffer);
        }}
        onError={error => {
          console.log('error====', error);
        }}
        onEnd={handleVideoEnd}
        onLoadStart={() => {
          console.log('load Start');
          setIsLoading(true);
        }}
        onLoad={() => {
          console.log('Onload');
          setIsLoading(false);
        }}
        style={{
          height: hp(43),
          width: wp(100),
          backgroundColor: COLORS.GREY,
        }}
      />
      {isPaused && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            alignSelf: 'center',
            top: 150,
          }}
          onPress={onPress}>
          <Icon
            name={'playcircleo'}
            type={Icons.AntDesign}
            color={COLORS.white}
            size={rf(7)}
          />
        </TouchableOpacity>
      )}
      {!isPaused && isLoading && (
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            top: 150,
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
    </View>
  );
});

const RenderSwiper = memo(({data}) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollToIndex = index => {
    flatListRef.current.scrollToIndex({animated: true, index});
  };
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};
  const onViewableItemsChanged = ({viewableItems, changed}) => {
    setCurrentIndex(changed[0].index);
  };
  const handleViewableItemsChanged = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);
  return (
    <>
      <FlatList
        data={data}
        ref={flatListRef}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfigCallbackPairs={handleViewableItemsChanged.current}
        renderItem={({item, index}) => {
          return (
            <View style={{}} key={index.toString}>
              {item.video ? (
                <RenderVideo item={item} />
              ) : (
                <FastImage
                  source={{
                    uri: item.src,
                  }}
                  style={styles.image}
                />
              )}
            </View>
          );
        }}
      />
      <BackArrow style={{top: 40, position: 'absolute', left: 5, top: 15}} />
      <View style={styles.leftArrow}>
        <TouchableOpacity
          onPress={() => {
            if (currentIndex === 0) {
              return;
            }
            scrollToIndex(currentIndex - 1);
          }}>
          <Icon
            name="left"
            type={Icons.AntDesign}
            size={rf(3)}
            color={COLORS.white}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (currentIndex === data.length - 1) {
              scrollToIndex(0);
              return;
            }
            scrollToIndex(currentIndex + 1);
          }}>
          <Icon
            name="right"
            type={Icons.AntDesign}
            size={rf(3)}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageCount}>
        <Icon
          name={'image-inverted'}
          type={Icons.Entypo}
          color={COLORS.primary}
          size={rf(2.5)}
        />
        <Text style={styles.txt}>{`${currentIndex + 1}/${data.length}`}</Text>
      </View>
      <View
        style={[
          {position: 'absolute', right: 10, flexDirection: 'row', bottom: 12},
        ]}>
        {data.map((item, index) => {
          return (
            <View
              key={`map-${index}`}
              style={{
                height: wp(2.8),
                width: wp(2.8),
                borderRadius: wp(2.8),
                backgroundColor:
                  currentIndex === index ? COLORS.yellow : COLORS.whiteOpacity,
                marginHorizontal: wp(0.5),
              }}
            />
          );
        })}
      </View>
    </>
  );
});
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(3),
    marginTop: hp(2),
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: hp(43),
    width: wp(100),
    // borderRadius: wp(2),
    backgroundColor: COLORS.GREY,
  },
  imageCount: {
    backgroundColor: COLORS.white,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 15,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.5),
    borderRadius: wp(4),
  },
  txt: {
    color: COLORS.primary,
    fontSize: rf(1.8),
    marginStart: wp(1.5),
    fontWeight: 'bold',
  },
  txt1: {
    color: COLORS.primary,
    fontSize: rf(2),
    fontWeight: 'bold',
  },
  txt3: {
    color: COLORS.primary,
    fontSize: rf(1.8),
    fontWeight: 'bold',
  },
  txt2: {
    color: COLORS.primary,
    fontSize: rf(1.8),
    fontWeight: '400',
    marginTop: hp(1.2),
  },
  container2: {
    marginTop: hp(2),
    paddingHorizontal: wp(3),
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  addQuantityCOntainer: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: wp(3),
    height: hp(4),
    alignItems: 'center',
    borderRadius: wp(5),
  },
  container3: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(15),
    height: hp(4),
    marginHorizontal: wp(2),
  },
  itemContainer: {
    marginRight: wp(2),
    height: wp(7.5),
    width: wp(7.5),
    borderRadius: wp(7.5),

    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  container4: {
    height: wp(6),
    width: wp(6),
    borderRadius: wp(6),
  },
  activityIndicatorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  leftArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: hp(20),
    right: 10,
    left: 10,
  },
});
