import {
  ScrollView,
  StyleSheet,
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
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../component/CustomInput';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../component/CustomButton';
import {Icons} from '../../component/icons';
import FastImage from 'react-native-fast-image';

const AddCard = () => {
  const nav = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <FastImage source={IMAGES.Bg} style={{flex: 1}}>
      <Header back={0} title={'PAYMENT MANAGEMENT'} />
      <View style={styles.box}>
        <ScrollView
          style={{marginBottom: hp(10)}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: wp(2)}}>
          <TextView label={'Add Card Information'} marginBottom={hp(2)} />

          <CustomInput placeholder={'Card Holder Name'} />
          <CustomInput placeholder={'Card Number'} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomInput
              placeholder={'Expiry Date'}
              rightImg
              icon={true}
              iconName={'calendar'}
              iconType={Icons.AntDesign}
              style={{width: wp(62)}}
            />
            <CustomInput placeholder={'CVC'} style={{width: wp(25)}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp(1),
            }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <TextView label={'Save Default'} fontSize={rf(1.9)} marginLeft={wp(2)}/>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: hp(2),
          alignSelf: 'center',
          width: wp(90),
        }}>
        <CustomButton
          text={'SAVE'}
          buttonStyle={COLORS.yellow}
          onPress={() => nav.navigate(SCREENS.Home)}
        />
      </View>
    </FastImage>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  box: {
    height: '100%',
    backgroundColor: COLORS.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: wp(3),
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
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    height: hp(8),
    borderRadius: wp(10),
    borderColor: COLORS.GREY,
    padding: wp(5),
    marginTop: hp(2),
  },
});
