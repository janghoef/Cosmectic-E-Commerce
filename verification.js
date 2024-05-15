import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
import OTPInputView from '@twotalltotems/react-native-otp-input';
import FastImage from 'react-native-fast-image';

const Verification = () => {
  const [num1, setNum1] = useState('');
  const nav = useNavigation();
  return (
    <FastImage source={IMAGES.Bg} style={{flex: 1}}>
      <Header title={'VERIFICATION'} back={0} />

      <View style={styles.box}>
        <View style={{width: wp(80), alignSelf: 'center'}}>
          <TextView
            label={'EMAIL VERIFICATION'}
            alignSelf={'center'}
            fontSize={rf(2.5)}
            marginTop={hp(1.5)}
          />
          <TextView
            label={
              'Etiam vulputate arcu sed justo luctus, eu vulputate turpis dignissim. Quisque in augue metus. Fusce tellus tortor.'
            }
            alignSelf={'center'}
            fontSize={rf(1.9)}
            textAlign={'center'}
            // width={wp(90)}
            marginTop={hp(1)}
          />
          <OTPInputView
            style={{width: '90%', height: hp(10), alignSelf: 'center',}}
            pinCount={4}
            keyboardAppearance="light"
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              setNum1(code);
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp(2),
            }}>
            <TextView label={"Don't receive your code?"} />
            <TouchableOpacity>
              <TextView
                label={'Resend'}
                paddingHorizontal={hp(2)}
                color={COLORS.fontcolor}
              />
            </TouchableOpacity>
          </View>
          <CustomButton
            bgColor={COLORS.yellow}
            text={'SUBMIT'}
            borderRadius={wp(100)}
            marginTop={hp(2)}
            fontColor={COLORS.black}
            onPress={() => nav.navigate(SCREENS.CompleteProfile)}
          />
        </View>
      </View>
    </FastImage>
  );
};

export default Verification;

const styles = StyleSheet.create({
  box: {
    height: hp(42),
    width: wp(95),
    alignSelf: 'center',
    borderRadius: wp(5),
    backgroundColor: COLORS.background,
    marginTop: hp(3),
  },
  underlineStyleBase: {
    borderWidth: 2,
    height: wp(15),
    borderRadius: wp(15),
    width: wp(15),
    borderColor: COLORS.GREY,
    fontSize: rf(2.2),
    color: COLORS.black,
    justifyContent:'center',
    alignItems:'center'
  },
  underlineStyleHighLighted: {
    borderWidth: 2,
    height: wp(15),
    borderRadius: wp(15),
    width: wp(15),
    borderColor: COLORS.yellow,
    fontSize: rf(2.2),
    justifyContent:'center',
    alignItems:'center'
  },
});
