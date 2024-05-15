import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';

import {
  CardField,
  StripeProvider,
  confirmPayment,
  createToken,
  CardForm,
} from '@stripe/stripe-react-native';
import CustomButton from '../../component/CustomButton';
import useReduxStore from '../../hooks/useReduxStore';
import {createOrderPayments} from '../../redux/slices/order';
// import paypalApi from './apis/paypalApi';
// import creatPaymentIntent from './apis/stripeApis';
// import ButtonComp from './Components/ButtonComp';
// import WebView from 'react-native-webview';
// import queryString from 'query-string';

// create a component
const PaymentManagmaent = () => {
  const {dispatch} = useReduxStore();
  const [cardInfo, setCardInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [paypalUrl, setPaypalUrl] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const fetchCardDetail = cardDetail => {
    // console.log("my card details",cardDetail)
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };

  const onDone = async () => {
    let apiData = {
      amount: 500,
      currency: 'INR',
    };

    if (!!cardInfo) {
      try {
        const resToken = await createToken({...cardInfo, type: 'Card'});
        // console.log("resToken", resToken)
        const formData = new FormData();
        formData.append('payment_method', 'stripe');
        formData.append('payment_token', resToken.token.id);
        formData.append('order_id', 595);
        const responce = await dispatch(createOrderPayments(formData));
        console.log('onDone  responce', responce);
      } catch (error) {
        console.log('onDone error===', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{padding: 16}}>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={cardDetails => {
              // console.log('cardDetails',cardDetails);
              fetchCardDetail(cardDetails);
            }}
            onFocus={focusedField => {
              // console.log('focusField', focusedField);
            }}
          />

          <CustomButton text={'Create Token'} onPress={onDone} />
        </View>
      </SafeAreaView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default PaymentManagmaent;
