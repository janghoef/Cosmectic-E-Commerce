import {
  StyleSheet,
  TouchableOpacity,
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

const ForgetPassword = () => {
  const nav = useNavigation();
  return (
    <FastImage
      source={IMAGES.Bg}
      style={{flex: 1, }}>
      <Header title={'FORGOT PASSWORD'} back={0} />

      <View style={styles.box}>
        <TextView
          label={'Enter Verified Email'}
          alignSelf={'center'}
          fontSize={rf(2.5)}
          marginTop={hp(1.5)}
        />
        <TextView
          label={
            'Etiam vulputate arcu sed justo luctus, eu vulputate turpis dignissim.Quisque in augue'
          }
          alignSelf={'center'}
          fontSize={rf(1.9)}
          textAlign={'center'}
          // width={wp(90)}
          marginTop={hp(1)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: hp(2),
          }}>
          <TextView label={'metus'} />
          <TouchableOpacity>
            <TextView
              label={' ***********@email.com'}
              paddingHorizontal={hp(1.9)}
              color={COLORS.fontcolor}
            />
          </TouchableOpacity>
        </View>
        <CustomInput
          placeholder={'Email Adress'}
          leftIcon={true}
          icon={IMAGES.envelop}
        />
        <CustomButton
          bgColor={COLORS.yellow}
          text={'SUBMIT'}
          borderRadius={wp(100)}
          marginTop={hp(2)}
          fontColor={COLORS.black}
          onPress={() => nav.navigate(SCREENS.ResetPassword)}
        />
      </View>
    </FastImage>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  box: {
    height: hp(40),
    paddingHorizontal: wp(3),
    alignSelf: 'center',
    marginTop: hp(3),
    paddingVertical: hp(2),
    borderRadius: wp(5),
    backgroundColor: COLORS.background,
  },
});
