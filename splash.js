import React, {useEffect} from 'react';
import {View, Image, Animated, Easing} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../common/responsivefunction';
import LottieView from 'lottie-react-native';
import {IMAGES, SCREENS} from '../../constant';

const Splash = () => {
  const navigation = useNavigation();
  const zoomValue = new Animated.Value(1);
  const logoPosition = new Animated.ValueXY({x: 0, y: -100});
  const logoScale = new Animated.Value(0);
  const logoOpacity = new Animated.Value(0);
  const lottieOpacity = new Animated.Value(0);

  useEffect(() => {
    // Zoom-out animation for the splash image
    Animated.timing(zoomValue, {
      toValue: 0.1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // Animation for logo position, scale, and opacity
    Animated.parallel([
      Animated.timing(logoPosition, {
        toValue: {x: 0, y: hp(10)}, // Move the logo down
        duration: 1000,
        delay: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        delay: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        delay: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();

    // Animation for Lottie animation opacity
    Animated.timing(lottieOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 3000, // Delay the Lottie animation after logo animation
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // Navigate to the next screen after all animations complete
    setTimeout(() => {
      navigation.navigate(SCREENS.Intro);
    }, 6000); // Adjust the delay based on your animation durations
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* Animated splash image */}
      <Animated.Image
        source={IMAGES.Bg}
        style={{
          width: 10000,
          height: 10000,
          transform: [{scale: zoomValue}],
        }}
        resizeMode="contain"
      />
      {/* Animated logo */}
      <Animated.View
        style={{
          position: 'absolute',
          top:hp(1),
          transform: [
            {translateX: logoPosition.x},
            {translateY: logoPosition.y},
            {scale: logoScale},
          ],
          opacity: logoOpacity,
        }}>
        <Animated.Image
          source={IMAGES.logo}
          style={{
            width: wp(45), // Set the initial width here
            height: hp(45), // Set the initial height here
          }}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Animated Lottie animation */}
      <Animated.View
        style={{position: 'absolute', bottom: hp(-4), opacity: lottieOpacity}}>
        <LottieView
          style={{height: hp(35), width: wp(35)}}
          source={IMAGES.loading}
          loop
          autoPlay
          speed={0.5}
        />
      </Animated.View>
    </View>
  );
};

export default Splash;
