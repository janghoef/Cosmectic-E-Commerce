import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, IMAGES} from '../../../constant';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  responsiveFontSize as rf,
} from '../../../common/responsivefunction';
import Icon, {Icons} from '../../../component/icons';
import CartItems from '../../../component/CartItems';
import Delievery from '../../../component/delievery';
import Payment from '../../../component/payment';
import OrderConfirm from '../../../component/order_confirm';
import TextView from '../../../component/Textview';
import FastImage from 'react-native-fast-image';
import CartHandler from './cart_handler';
import AddCartItems from '../../../component/CartItems';

const Cart = () => {
  const {status, completeTask} = CartHandler();

  return (
    <FastImage style={styles.container} source={IMAGES.Bg}>
      <TextView
        label={'MY CART'}
        fontSize={rf(2.3)}
        alignSelf={'center'}
        color={COLORS.WHITE}
        marginTop={hp(1.5)}
        marginBottom={hp(3)}
      />
      <View style={styles.container1}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(2),
            paddingHorizontal: wp(3),
          }}>
          <RenderStatus
            icon={'cart-outline'}
            type={Icons.Ionicons}
            title={'My Cart'}
            completedTask={completeTask}
          />
          <RenderStatus
            icon={'truck-fast-outline'}
            type={Icons.MaterialCommunityIcons}
            title={'Delievery'}
            completedTask={completeTask}
          />
          <RenderStatus
            icon={'dollar-sign'}
            type={Icons.Feather}
            title={'Payment'}
            completedTask={completeTask}
          />
          <RenderStatus
            noLine
            icon={'check'}
            type={Icons.Feather}
            title={'Confirmed'}
            completedTask={completeTask}
          />
        </View>
        <View style={styles.line1} />

        <HandleStatus title={status} completedTask={completeTask} />
      </View>
    </FastImage>
  );
};

export default Cart;
const HandleStatus = ({title}) => {
  switch (title) {
    case 'My Cart':
      return <AddCartItems />;
    case 'Delievery':
      return <Delievery />;
    case 'Payment':
      return <Payment />;
    case 'Confirmed':
      return <OrderConfirm />;
  }
};
const RenderStatus = ({noLine, icon, type, title, completedTask}) => {
  const handleCompleteTask = title => {
    return completedTask?.includes(title);
  };

  
  return (
    <View>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => {}}
        activeOpacity={1}>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: handleCompleteTask(title)
                ? COLORS.primary
                : COLORS.white,
            },
          ]}>
          <Icon
            name={icon}
            type={type}
            color={handleCompleteTask(title) ? COLORS.white : COLORS.primary}
            size={rf(4)}
          />
        </View>
        <View
          style={[
            styles.line,
            {backgroundColor: !noLine ? COLORS.GREY : COLORS.transparent},
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  container1: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5),
    // paddingHorizontal: wp(4),
  },
  itemContainer: {
    backgroundColor: COLORS.white,
    height: wp(19.5),
    width: wp(19.5),
    borderRadius: wp(19.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: COLORS.GREY,
  },
  line: {
    width: wp(5),
    height: hp(0.5),
    backgroundColor: COLORS.GREY,
  },
  txt: {
    color: COLORS.primary,
    fontSize: rf(1.8),
    alignSelf: 'center',
    marginRight: wp(3.5),
    marginTop: hp(0.8),
    fontWeight: 'bold',
  },
  line1: {height: 1.5, backgroundColor: COLORS.GREY, marginTop: hp(2.5)},
});
