import {
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SCREENS} from '../../constant';
import Header from '../../component/custom_header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import TextView from '../../component/Textview';
import CustomButton from '../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../component/CustomInput';
import FastImage from 'react-native-fast-image';

const ResetPassword = () => {
  const nav = useNavigation();
  return (
    <FastImage source={IMAGES.Bg} style={{flex: 1}}>
      <Header title={'RESET PASSWORD'} back={0} />

      <View style={styles.box}>
        <View style={{width: wp(80), alignSelf: 'center'}}>
          <TextView
            label={'CREAT PASSWORD'}
            alignSelf={'center'}
            fontSize={rf(2.5)}
            marginTop={hp(1.5)}
            marginBottom={hp(2)}
          />

          <CustomInput
            placeholder={'New Password'}
            leftIcon={true}
            icon={IMAGES.lock}
            rightImg3={IMAGES.eye2}
          />
          <CustomInput
            placeholder={'Re-type Password'}
            leftIcon={true}
            icon={IMAGES.lock}
            rightImg3={IMAGES.eye2}
          />
          <CustomButton
            bgColor={COLORS.yellow}
            text={'SAVE PASSWORD'}
            borderRadius={wp(100)}
            marginTop={hp(2)}
            fontColor={COLORS.black}
            onPress={() => nav.navigate(SCREENS.Login)}
          />
        </View>
      </View>
    </FastImage>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  box: {
    height: hp(35),
    width: wp(95),
    alignSelf: 'center',
    borderRadius: wp(5),
    backgroundColor: COLORS.background,
    marginTop: hp(3),
  },
});
