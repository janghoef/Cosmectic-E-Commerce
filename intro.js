import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import {COLORS, IMAGES, SCREENS} from '../../constant';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import CustomButton from '../../component/CustomButton';
import FastImage from 'react-native-fast-image';

const onboardingItems = [
  {
    title: 'Innovative Cosmetic Designs',
    description:
      'Duis fermentum risus eget mi vulputate, non porttitor turpis vehicula. Vestibulum porta felis libero, aliquam pellentesque justo volutpat in.',
    image: IMAGES.img1,
  },
  {
    title: 'Get A Free Gift On Every Purchase',
    description:
      'Duis fermentum risus eget mi vulputate, non porttitor turpis vehicula. Vestibulum porta felis libero, aliquam pellentesque justo volutpat in.',
    image: IMAGES.img2,
  },
  {
    title: 'Face Beauty Products Revitalize Your Skin',
    description:
      'Duis fermentum risus eget mi vulputate, non porttitor turpis vehicula. Vestibulum porta felis libero, aliquam pellentesque justo volutpat in..',
    image: IMAGES.img3,
  },
  {
    title: 'Beauty Gives You The Confidence',
    description:
      'Duis fermentum risus eget mi vulputate, non porttitor turpis vehicula. Vestibulum porta felis libero, aliquam pellentesque justo volutpat in.',
    image: IMAGES.img4,
  },
];

const Intro = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();
  const handleNext = () => {
    if (currentIndex < onboardingItems.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === onboardingItems.length - 1) {
      navigation.navigate(SCREENS.Login);
    }
  };
  return (
    <FastImage style={styles.container} source={IMAGES.Bg}>
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          data={onboardingItems}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: hp(5),
          }}
          scrollEventThrottle={200}
          decelerationRate="fast"
          onScroll={event => {
            const {x} = event.nativeEvent.contentOffset;
            const newIndex = Math.round(x / width);
            setCurrentIndex(newIndex);
          }}
          renderItem={({item, index}) => (
            <RenderItem item={item} index={index} currentIndex={currentIndex} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.dotContainer}>
          {onboardingItems.map((item, index) => (
            <RenderDot index={index} currentIndex={currentIndex} />
          ))}
        </View>
      </View>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <CustomButton
          text={
            currentIndex === onboardingItems.length - 1 ? 'Continue' : 'Next'
          }
          onPress={handleNext}
          buttonStyle={{marginHorizontal: wp(2)}}
        />
      </View>
    </FastImage>
  );
};

const RenderItem = ({item, index, currentIndex}) => {
  const {width, height} = useWindowDimensions();
  const opacity = useSharedValue(0);
  useEffect(() => {
    if (currentIndex === index) {
      opacity.value = 1;
    } else {
      opacity.value = 0;
    }
  }, [currentIndex]);
  const rImageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {duration: 1000}),
    };
  });
  return (
    <View key={index} style={[styles.itemContainer, {width}]}>
      <Animated.Image source={item.image} style={[styles.image, rImageStyle]} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};
const RenderDot = ({currentIndex, index}) => {
  const rDotStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        currentIndex === index ? COLORS.yellow : COLORS.whiteOpacity,
        {duration: 1000},
      ),
    };
  });
  return <Animated.View style={[styles.dot, rDotStyle]} />;
};
const styles = StyleSheet.create({
  container: {flex: 1},
  scrollView: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: hp(2),
    color: '#FFF',
    width: wp(90),
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  paginationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    height: hp(50),
    width: wp(70),
    borderRadius: wp(2),
  },
  dot: {
    height: wp(3),
    width: wp(3),
    borderRadius: wp(3),
    backgroundColor: COLORS.greyish,
    marginHorizontal: wp(1),
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: hp(2),
  },
});

export default Intro;
