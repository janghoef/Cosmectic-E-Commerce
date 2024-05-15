import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IMAGES, SCREENS} from '../../constant';
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
import AuthHandler from './auth_handler';

const SignUp = props => {
  const nav = useNavigation();
  const [secure, setSecure] = useState(true);
  const [secure1, setSecure1] = useState(true);
  const {handleOnChange, handleSignUp} = AuthHandler(props);
  return (
    <FastImage source={IMAGES.Bg} style={{flex: 1}}>
      <Image source={IMAGES.logo} style={styles.image} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          style={styles.box}
          contentContainerStyle={{
            paddingHorizontal: wp(3),
            paddingBottom: hp(3),
          }}>
          <TextView
            label={'Sign Up'}
            alignSelf={'center'}
            marginTop={hp(2)}
            fontSize={rf(3)}
            color={COLORS.fontcolor}
            marginBottom={hp(3)}
          />
          <CustomInput
            placeholder={'Full Name'}
            leftIcon={true}
            icon={IMAGES.user}
            setValue={value => handleOnChange({username: value})}
          />
          <CustomInput
            placeholder={'Email Adress'}
            leftIcon={true}
            icon={IMAGES.envelop}
            setValue={value => handleOnChange({email: value})}
          />
          <CustomInput
            placeholder={'Phone Number'}
            leftIcon={true}
            icon={IMAGES.phone}
            setValue={value => handleOnChange({phoneNumber: value})}
          />
          <CustomInput
            placeholder={'Create Password'}
            leftIcon={true}
            icon={IMAGES.lock}
            secure={true}
            secureTextEntry={secure}
            setSecureTextEntry={setSecure}
            setValue={value => handleOnChange({password: value})}
          />
          <CustomInput
            placeholder={'Re-type Password'}
            leftIcon={true}
            icon={IMAGES.lock}
            secure={true}
            secureTextEntry={secure1}
            setSecureTextEntry={setSecure1}
            setValue={value => handleOnChange('reEnterPassword', value)}
          />

          <CustomButton
            onPress={handleSignUp}
            bgColor={COLORS.yellow}
            text={'CONTINUE'}
            borderRadius={wp(90)}
            marginTop={hp(2)}
            fontColor={COLORS.black}
            width={wp(90)}
            height={hp(7)}
          />

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: hp(2),
            }}>
            <TextView label={'Already have an account?'} />
            <TouchableOpacity onPress={() => nav.navigate(SCREENS.Login)}>
              <TextView
                label={'Sign in'}
                paddingHorizontal={hp(2)}
                color={COLORS.fontcolor}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </FastImage>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  image: {
    width: wp(40), // Set the initial width here
    height: hp(19.5),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  box: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginTop: hp(5),
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
  },
});
