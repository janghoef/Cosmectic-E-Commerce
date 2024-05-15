import {
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import {Svg} from 'react-native-svg';
import {SvgProfile, Svgfacebook, Svginsta} from '../../component/svg';
import {useNavigation} from '@react-navigation/native';
import Header from '../../component/custom_header';
import {launchImageLibrary} from 'react-native-image-picker';
import CountryPicker from 'react-native-country-picker-modal';

const CompleteProfile = () => {
  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response.didCancel) {
        return;
      }

      if (!response.assets) {
        return;
      }
      let abc = response?.assets[0];
      let data = {
        name: abc?.fileName,
        type: abc?.type,
        uri: abc?.uri,
      };
      setPhoto(data);
    });
  };
  const nav = useNavigation();
  const [modal, setModal] = useState(false);
  const [photo, setPhoto] = useState('');

  const [isCountryCodePickerVisible, setIsCountryCodePickerVisible] =
    useState(false);
  const [countryCode, setCountryCode] = useState('1');
  const [countryFlag, setcountryFlag] = useState('US');
  const onSelect = country => {
    setCountryCode(country.callingCode[0]);
    setcountryFlag(country.cca2);
    console.log(country);
  };

  return (
    <>
      <ImageBackground source={IMAGES.Bg} style={{flex: 1}}>
        <Header title={'COMPLETE PROFILE'} back={0} />
        <View style={styles.box}>
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: wp(3)}}>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => handleChoosePhoto()}
                style={styles.Photo}>
                <View>
                  {photo ? (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{uri: photo.uri}}
                        style={{
                          resizeMode: 'cover',
                          height: wp(24.5),
                          width: wp(24.5),
                          borderRadius: wp(25),
                        }}
                      />
                    </View>
                  ) : (
                    <Image
                      source={IMAGES.dp}
                      style={{
                        resizeMode: 'cover',
                        height: wp(27),
                        width: wp(27),
                        borderRadius: wp(25),
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <CustomInput
                placeholder={'Full Name'}
                leftIcon={true}
                icon={IMAGES.user}
              />
              <CustomInput
                placeholder={'sarah.kevin@email.com'}
                leftIcon={true}
                icon={IMAGES.envelop}
              />
              <CustomInput
                placeholder={'+1 223 445 6789'}
                leftIcon={true}
                icon={IMAGES.phone}
              />
              <View style={styles.button}>
                <CountryPicker
                  withFilter
                  onSelect={onSelect}
                  countryCode={countryFlag}
                  withCountryNameButton
                  visible={isCountryCodePickerVisible}
                  withCallingCode
                />
              </View>

              <CustomInput
                placeholder={'State'}
                leftIcon={true}
                icon={IMAGES.flag}
              />
              <CustomInput
                placeholder={'Address'}
                leftIcon={true}
                icon={IMAGES.marker}
              />
              <CustomInput
                placeholder={'ZIP Code'}
                leftIcon={true}
                icon={IMAGES.marker}
              />

              <CustomButton
                onPress={() => setModal(!modal)}
                text={'SAVE PROFILE'}
                marginTop={hp(2)}
                fontColor={COLORS.black}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: hp(2),
                }}>
                <TextView label={'Do it later?'} />
                <TouchableOpacity
                  onPress={() => nav.navigate(SCREENS.BottomTabs)}>
                  <TextView
                    label={'Skip'}
                    paddingHorizontal={hp(2)}
                    color={COLORS.fontcolor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <Modal transparent={true} visible={modal} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
          <View style={styles.modal}>
            <View style={styles.inner}>
              <SvgProfile />
              <View style={{width: wp(80), alignSelf: 'center'}}>
                <TextView
                  label={'PROFILE COMPLETED'}
                  fontSize={rf(2.5)}
                  alignSelf={'center'}
                  marginTop={hp(0.5)}
                />
                <TextView
                  label={
                    'Etiam vulputate arcu sed justo luctus, eu vulputate turpis dignissim.'
                  }
                  textAlign={'center'}
                  marginTop={hp(0.5)}
                />
                <CustomButton
                  onPress={() => nav.navigate(SCREENS.BottomTabs)}
                  text={'CONTINUE'}
                  marginTop={hp(2)}
                  fontColor={COLORS.black}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  inner: {
    height: hp(35),
    width: wp(90),
    backgroundColor: COLORS.background,
    borderRadius: wp(5),
  },

  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,10,55,0.7)',
  },

  image: {
    width: wp(40), // Set the initial width here
    height: hp(19.5),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  box: {
    height: hp(87),

    backgroundColor: COLORS.background,
    marginTop: hp(1),
    borderRadius: wp(5),
  },
  button: {
    width: wp(94),
    height: hp(6),
    borderColor: COLORS.GREY,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    borderRadius: wp(10),
    shadowColor: COLORS.black,
    elevation: 4,
    paddingLeft: 15,
    marginTop: hp(1),
    marginBottom: hp(1),
  },
  close: {
    width: 20,
    height: 20,
  },
  input: {
    paddingVertical: 10,
  },
  scroll: {
    marginBottom: 10,
  },
  Photo: {
    height: wp(26),
    width: wp(26),
    borderColor: COLORS.primary,
    borderWidth: 5,
    marginTop: hp(4),
    borderRadius: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(3),
    alignSelf: 'center',
  },
});
