import {View, Text} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import useReduxStore from '../../../hooks/useReduxStore';
import {
  decreasQuantity,
  emptyCart,
  increaseQuantity,
  removeCartItem,
} from '../../../redux/slices/cart';
import {
  applyCoupon,
  createOrder,
  saveCompleteTask,
  saveOrderData,
} from '../../../redux/slices/order';
import utills from '../../../utills';

const CartHandler = () => {
  const {dispatch, getState} = useReduxStore();
  const {CartItems} = getState('cart');
  const {orderData, completeTask, status} = getState('order');
  const {isLoading} = getState('loading');
  const {ProfileData} = getState('profile');
  // const [status, setStatus] = useState('My Cart');
  const [completedTask, setCompletedTask] = useState(['My Cart']);

  const [couponData, setCouponData] = useState();
  const [loading, setLoading] = useState(false);

  const [profile, setProfileData] = useState({
    username: ProfileData?.first_name,
    lastName: ProfileData?.first_name,
    phoneNumber: ProfileData?.billing?.phone,
    email: ProfileData?.email,
    country: ProfileData?.billing?.country,
    state: ProfileData?.billing?.state,
    address: ProfileData?.billing?.address_1,
    address2: ProfileData?.billing?.address_2,
    postalCode: ProfileData?.billing?.postcode,
    city: ProfileData?.billing?.city,
    promoCode: '',
  });
  const [isCountryCodePickerVisible, setIsCountryCodePickerVisible] =
    useState(false);
  const [countryCode, setCountryCode] = useState('1');
  const [countryFlag, setcountryFlag] = useState(
    ProfileData?.billing?.country !== '' ? ProfileData?.billing?.country : 'US',
  );
  const handleRemoveCartItem = item => {
    // console.log(CartItems.length);
    dispatch(removeCartItem(item));
  };
  const onSelect = country => {
    setCountryCode(country.callingCode[0]);
    setcountryFlag(country.cca2);
    console.log(country);
  };
  const handleOnChange = useCallback(
    value => {
      setProfileData(state => ({...state, ...value}));
    },
    [setProfileData],
  );
  const handleQuantity = (title, item) => {
    if (title === 'increase') dispatch(increaseQuantity(item));

    if (title === 'decrease') dispatch(decreasQuantity(item));
  };

  const handleCreateOrder = (setStatus, setCompletedTask, completedTask) => {
    let temp = [];

    CartItems.map((item, index) => {
      temp.push({
        product_id: item.id,
        quantity: item.quantity,
      });
    });
    const formdata = new FormData();
    formdata.append('first_name', profile.username);
    formdata.append('last_name', profile.lastName);
    formdata.append('email', profile.email);
    formdata.append('phone', profile.phoneNumber);
    formdata.append('billing[phone]', profile.phoneNumber);
    formdata.append('billing[address_2]', profile.address2);
    formdata.append('billing[state]', profile.state);
    formdata.append('billing[country]', countryFlag);
    formdata.append('billing[address_1]', profile.address);
    formdata.append('billing[postcode]', profile.postalCode);
    formdata.append('payment_method', 'stripe');
    formdata.append('payment_method_title', 'Direct Bank Transfer');
    if (couponData) {
      formdata.append('coupon_lines[0][code]', couponData.code);
    }
    formdata.append('customer_id', ProfileData?.id);
    // formdata.append('parent_id', ProfileData?.id);
    temp.forEach((item, index) => {
      formdata.append(`line_items[${index}][product_id]`, item.product_id);
      formdata.append(`line_items[${index}][quantity]`, item.quantity);
    });
    dispatch(createOrder(formdata))
      .unwrap()
      .then(response => {
        // console.log('createOrder response', response);

        dispatch(saveOrderData(response));
        dispatch(emptyCart());
        dispatch(saveCompleteTask('Payment'));
      })
      .catch(err => {
        console.log('createOrder err', err);
        utills.errorAlert(err.message);
      });
  };

  const handleCoupon = () => {
    setLoading(true);
    dispatch(applyCoupon())
      .unwrap()
      .then(response => {
        setLoading(false);
        // console.log('handleCoupon response', response);
        const data = response.find(item => item.code === profile.promoCode);
        if (data) {
          setCouponData(data);
        } else {
          utills.errorAlert('Invalid discount code');
        }
      })
      .catch(err => {
        setLoading(false);
        console.log('handleCoupon err', err);
      });
  };
  const subtotal = CartItems?.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = parseInt(item.quantity);
    if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
      return acc + itemPrice * itemQuantity;
    } else {
      return acc;
    }
  }, 0);
  return {
    isLoading,
    CartItems,
    isCountryCodePickerVisible,
    countryCode,
    countryFlag,
    profile,
    subtotal,
    status,
    couponData,
    loading,
    completeTask,
    orderData,
    dispatch,
    setCompletedTask,
    // setStatus,
    handleCreateOrder,
    setCountryCode,
    handleRemoveCartItem,
    handleQuantity,
    onSelect,
    handleOnChange,
    handleCoupon,
  };
};

export default CartHandler;
