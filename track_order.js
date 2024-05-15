import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SCREENS} from '../../constant';
import Header from '../../component/custom_header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../common/responsivefunction';
import TextView from '../../component/Textview';
import {SvgStar} from '../../component/svg';
import CustomButton from '../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';

export default function TrackOrder({route}) {
  const nav = useNavigation();
  const {from} = route.params;
  //   console.log('from====',from);
  return (
    <FastImage source={IMAGES.Bg} style={styles.background}>
      <Header back={0} title={'ORDER TRACKING'} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: hp(5)}}>
        <View style={{alignItems: 'center'}}>
          <LottieView
            style={{height: hp(23), width: wp(50)}}
            source={IMAGES.TrackingOrder}
            autoPlay
          />
          <TextView
            label={'Order Status'}
            color={COLORS.black}
            fontSize={rf(1.8)}
          />
          <TextView
            label={'In Transit'}
            color={COLORS.fontcolor}
            fontSize={rf(2.6)}
          />
        </View>
        <View style={styles.container1}>
          <HandleOrderStatus
            title={'ORDER ACCEPTED'}
            date={'26 Sep:09:30 PM'}
            isCompleted={true}
            color={COLORS.primary}
          />
          <HandleOrderStatus
            title={'ORDER PREPARED'}
            date={'26 Sep:09:30 PM'}
            isCompleted={true}
            color={COLORS.primary}
          />
          <HandleOrderStatus
            title={'ORDER ON THE WAY'}
            date={'26 Sep:09:30 PM'}
            isCompleted={true}
            color={COLORS.primary}
          />
          <HandleOrderStatus
            title={'ORDER RECIEVE'}
            date={'26 Sep:09:30 PM'}
            noline
            color={COLORS.GREY}
            isCompleted={false}
          />
        </View>
        <View style={[styles.container2]}>
          <TextView
            label={'Order Details'}
            color={COLORS.fontcolor}
            fontSize={rf(2.6)}
            fontWeight={'bold'}
            marginBottom={hp(2)}
            marginTop={hp(0.7)}
          />
          <HandleOrderDetail title={'Order ID'} detail={'01233'} />
          <HandleOrderDetail title={'Order From'} detail={'Sarah Kevin'} />
          <HandleOrderDetail
            title={'Delievery Address'}
            detail={'USA New York 123 street...'}
          />
          <HandleOrderDetail
            title={'Total Amount (incl.GST'}
            detail={'$30.00'}
            noLine
          />
        </View>
        {from === 'trackorder' ? (
          <View style={styles.row}>
            <CustomButton
              text={'NEED HELP?'}
              onPress={() => nav.navigate(SCREENS.Help)}
              buttonStyle={{width: wp(44)}}
            />
            <CustomButton
              text={'GO TO HOMEPAGE'}
              onPress={() => nav.navigate(SCREENS.Home)}
              buttonStyle={{width: wp(44), backgroundColor: COLORS.primary}}
              textColor={COLORS.white}
            />
          </View>
        ) : (
          <CustomButton
            text={'NEED HELP?'}
            onPress={() => nav.navigate(SCREENS.Help)}
          />
        )}
      </ScrollView>
    </FastImage>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: hp(2),
    paddingHorizontal: wp(5),
    paddingBottom: hp(3),
  },
  container1: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    paddingBottom: hp(2),
    borderColor: COLORS.blackWithOpacity,
    borderRadius: wp(5),
    marginTop: hp(2),
    shadowColor: COLORS.BLACK,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container2: {
    backgroundColor: COLORS.WHITE,
    paddingBottom: hp(2),
    borderColor: COLORS.blackWithOpacity,
    marginTop: hp(2),
    borderRadius: wp(5),
    paddingHorizontal: wp(3),
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  line: {
    height: hp(5),
    width: wp(0.2),
    backgroundColor: COLORS.GREY,
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
  },
  line1: {
    height: hp(0.1),
    backgroundColor: COLORS.GREY,
    marginVertical: hp(1.2),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const HandleOrderStatus = ({title, date, noline, isCompleted, color}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp(2.5),
        justifyContent: 'space-between',
      }}>
      <TextView
        label={date}
        color={color}
        fontSize={rf(1.8)}
        width={wp(35)}
        textAlign={'right'}
      />
      <View style={{alignItems: 'center'}}>
        {!noline && <View style={styles.line} />}
        <SvgStar style={{marginHorizontal: wp(5)}} isCompleted={isCompleted} />
      </View>
      <TextView
        label={title}
        color={color}
        fontSize={rf(1.8)}
        width={wp(35)}
        textAlign={'left'}
      />
    </View>
  );
};
const HandleOrderDetail = ({title, detail, noLine}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextView label={title} color={COLORS.GREY} fontSize={rf(1.8)} />
        <TextView label={detail} color={COLORS.GREY} fontSize={rf(1.6)} />
      </View>
      {!noLine && <View style={styles.line1} />}
    </View>
  );
};
