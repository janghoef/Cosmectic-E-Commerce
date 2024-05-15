import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SCREENS} from '../../../constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
} from '../../../common/responsivefunction';
import TextView from '../../../component/Textview';
import {
  SvgClock,
  SvgHeadephone,
  SvgPen,
  SvgPolicey,
  SvgReturn,
  SvgSwitch,
  SvgTerms,
  Svglogo,
} from '../../../component/svg';
import {removeUserdata} from '../../../redux/slices/auth';
import SettingHandler from './setting_handler';
import {saveProfileData} from '../../../redux/slices/profile';

const Setting = props => {
  const {ProfileData, dispatch} = SettingHandler(props);

  return (
    <View style={styles.container}>
      <ScrollView style={{}} contentContainerStyle={{paddingBottom: hp(5)}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.Profile)}
          activeOpacity={0.6}
          style={styles.top}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Image source={IMAGES.profile} style={styles.image} /> */}
            <View style={styles.topinner}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextView label={ProfileData?.first_name} fontSize={rf(2)} />
                <SvgPen />
              </View>
              <TextView
                label={ProfileData?.email}
                color={COLORS.fontcolor}
                fontSize={rf(1.8)}
              />
            </View>
          </View>
          {/* <SvgCross /> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.OrderHistory)}
          style={styles.item}>
          <SvgClock />
          <TextView
            label={'Order History'}
            paddingHorizontal={wp(3)}
            fontSize={rf(2)}
          />
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.GREY,
            width: wp(85),
            marginLeft: wp(3),
            marginTop: hp(2),
          }}
        />

        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.PaymentManagmaent)}
          style={styles.item2}>
          <SvgWallet />
          <TextView
            label={'Payment Management'}
            paddingHorizontal={wp(3)}
            fontSize={rf(2)}
          />
        </TouchableOpacity> */}
        {/* <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.GREY,
            width: wp(85),
            marginLeft: wp(3),
            marginTop: hp(2),
          }}
        /> */}

        <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.About)}
          style={styles.item2}>
          <Svglogo />
          <TextView
            label={'About Us'}
            paddingHorizontal={wp(3)}
            fontSize={rf(2)}
          />
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.GREY,
            width: wp(85),
            marginLeft: wp(3),
            marginTop: hp(2),
          }}
        />

        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.Help)}
          style={styles.item2}>
          <SvgHeadephone />
          <TextView label={'Help'} paddingHorizontal={wp(3)} fontSize={rf(2)} />
        </TouchableOpacity> */}
        {/* <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.GREY,
            width: wp(85),
            marginLeft: wp(3),
            marginTop: hp(2),
          }}
        /> */}

        <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.Return)}
          style={styles.item2}>
          <SvgReturn />
          <TextView
            label={'Return & Exchanges'}
            paddingHorizontal={wp(3)}
            fontSize={rf(2)}
          />
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.GREY,
            width: wp(85),
            marginLeft: wp(3),
            marginTop: hp(2),
          }}
        />

        <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.Terms)}
          style={styles.item2}>
          <SvgTerms />
          <TextView
            label={'Terms & Conditions'}
            paddingHorizontal={wp(3)}
            fontSize={rf(2)}
          />
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.GREY,
            width: wp(85),
            marginLeft: wp(3),
            marginTop: hp(2.5),
          }}
        />

        <TouchableOpacity
          onPress={() => props.navigation.navigate(SCREENS.Privacy)}
          style={styles.item2}>
          <SvgPolicey />
          <TextView
            label={'Privacy Policy'}
            paddingHorizontal={wp(3)}
            fontSize={rf(2)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(saveProfileData(null));
          }}>
          <SvgSwitch />
          <TextView
            label={'LOGOUT'}
            color={COLORS.yellow}
            paddingHorizontal={wp(2)}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: wp(5),
    paddingBottom: hp(9),
  },
  image: {
    height: wp(21),
    width: wp(21),
    borderRadius: wp(21),
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topinner: {
    paddingHorizontal: wp(3),
  },
  item: {
    flexDirection: 'row',
    marginLeft: wp(4),
    marginTop: hp(5),
    alignItems: 'center',
  },
  item2: {
    flexDirection: 'row',
    marginLeft: wp(4),
    marginTop: hp(2.8),
    alignItems: 'center',
  },
  button: {
    height: hp(5.5),
    width: wp(34),
    marginTop: hp(4),
    borderRadius: wp(10),
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(4),
  },
});
