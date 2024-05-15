import {
  Image,
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
import {Svgfacebook, Svginsta} from '../../component/svg';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import AuthHandler from './auth_handler';

const Login = () => {
  const nav = useNavigation();
  const [secure, setSecure] = useState(true);
  const {email, password, setEmail, setPassword, handleSignIn} = AuthHandler();
  return (
    <FastImage source={IMAGES.Bg} style={{flex: 1}}>
      <Image source={IMAGES.logo} style={styles.image} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.box}
        contentContainerStyle={{
          paddingHorizontal: wp(3),
          paddingBottom: hp(3),
        }}>
        <TextView
          label={'Login'}
          alignSelf={'center'}
          marginTop={hp(2)}
          fontSize={rf(3)}
          color={COLORS.fontcolor}
          marginBottom={hp(3)}
        />
        <CustomInput
          placeholder={'Email Adress'}
          leftIcon={true}
          icon={IMAGES.envelop}
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secure={true}
          setSecureTextEntry={setSecure}
          secureTextEntry={secure}
          leftIcon={true}
          icon={IMAGES.lock}
          // rightImg3={IMAGES.eye2}
        />
        {/* <TouchableOpacity
          onPress={() => nav.navigate(SCREENS.ForgetPassword)}
          style={{left: wp(57), marginTop: hp(1.5)}}>
          <TextView label={'Forgot Password'} />
        </TouchableOpacity> */}

        <CustomButton
          bgColor={COLORS.yellow}
          text={'LOGIN'}
          borderRadius={wp(100)}
          marginTop={hp(3)}
          fontColor={COLORS.black}
          onPress={handleSignIn}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: hp(5),
          }}>
          <View
            style={{
              borderBottomWidth: 2,
              width: wp(42),
              borderColor: COLORS.GREY,
            }}
          />
          <TextView label={'Or'} color={COLORS.GREY} fontSize={rf(2.5)} />
          <View
            style={{
              borderBottomWidth: 2,
              width: wp(42),
              borderColor: COLORS.GREY,
            }}
          />
        </View>
        {/* <TouchableOpacity>
          <Svgfacebook />
        </TouchableOpacity>
        <TouchableOpacity>
          <Svginsta />
        </TouchableOpacity> */}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp(3),
          }}>
          <TextView label={"Don't have an account?"} />
          <TouchableOpacity onPress={() => nav.navigate(SCREENS.SignUp)}>
            <TextView
              label={'Sign up'}
              paddingHorizontal={hp(2)}
              color={COLORS.fontcolor}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </FastImage>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: wp(40), // Set the initial width here
    height: wp(40),
    borderRadius: wp(40),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  box: {
    height: hp(80),
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: hp(5),
  },
});
