import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {COLORS, IMAGES, SCREENS} from '../../constant';
import Header from '../../component/custom_header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import TextView from '../../component/Textview';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import WebView from 'react-native-webview';

const Return = () => {
  const nav = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const url = 'https://innovativecosmeticdesigns.com/returns-exchanges-2/';
  
  return (
    <FastImage source={IMAGES.Bg} style={{flex: 1}}>
      <Header back={0} title={'Return & Exchange'} />
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
          style={{flex:1}}
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

export default Return;

const styles = StyleSheet.create({
  box: {
    flex:1,
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
 
  },
  inner: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: COLORS.background,
  },
  text: {
    height: hp(20),
    backgroundColor: COLORS.WHITE,
    marginTop: hp(2),
    borderRadius: wp(3),
    shadowColor: COLORS.black,
    elevation: 3,
    padding: 10,
  },
});
