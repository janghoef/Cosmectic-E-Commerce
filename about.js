import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IMAGES} from '../../constant';
import Header from '../../component/custom_header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import FastImage from 'react-native-fast-image';
import {WebView} from 'react-native-webview';
const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://innovativecosmeticdesigns.com/help/';
  
  return (
    <FastImage source={IMAGES.Bg} style={{flex:1}}>
      <Header back={0} title={'ABOUT US'} />
    
      <View style={styles.box}>
        {isLoading && (
          <View
            style={{
              height: hp(80),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          </View>
        )}
        <WebView
          source={{uri: url}}
          // source={{html: htmlSource}}
          onLoadEnd={() => {
            console.log('onLoadEnd');
            setIsLoading(false);
          }}
          onNavigationStateChange={state => {
            console.log('navigation state:', state);
          }}
        />
      </View>
    
    </FastImage>
  );
};

export default About;

const styles = StyleSheet.create({
  box: {
flex:1,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: hp(1),
  },
  inner: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: COLORS.background,
  },
  innerbox: {
    height: hp(6),
    width: wp(70),
    backgroundColor: COLORS.darkblue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(12),
    marginTop: hp(2),
    alignSelf: 'center',
  },
});
