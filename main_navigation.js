import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/auth/splash';
import {SCREENS} from '../constant';
import {NavigationContainer} from '@react-navigation/native';
import Intro from '../screens/auth/intro';
import Login from '../screens/auth/login';
import BottomTabs from './bottom_tab';
import ForgetPassword from '../screens/auth/forgetpassword';
import ResetPassword from '../screens/auth/restpassword';
import Verification from '../screens/auth/verification';
import SignUp from '../screens/auth/signup';
import CompleteProfile from '../screens/auth/completeprofile';
import About from '../screens/content/about';
import Privacy from '../screens/content/privacy';
import Return from '../screens/content/return';
import Terms from '../screens/content/terms';
import Help from '../screens/help';
import AddCard from '../screens/addcard/addcard';
import SeeAllProducts from '../screens/product/all_products';
import SearchProducts from '../screens/product/search_products';
import OrderHistory from '../screens/order/orderhistory';
import ProductsDetails from '../screens/product/product_details';
import TrackOrder from '../screens/order/track_order';
import Notification from '../screens/notification';
import useReduxStore from '../hooks/useReduxStore';
import PaymentManagmaent from '../screens/payment';

const MainNavigation = () => {
  const Stack = createStackNavigator();
  const {getState} = useReduxStore();
  const {userData} = getState('auth');
  const {ProfileData} = getState('profile');
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.Login}
        screenOptions={{headerShown: false}}>
        {ProfileData === null ? (
          <>
            <Stack.Screen name={SCREENS.Splash} component={Splash} />
            <Stack.Screen name={SCREENS.Intro} component={Intro} />
            <Stack.Screen name={SCREENS.Login} component={Login} />
            <Stack.Screen
              name={SCREENS.ForgetPassword}
              component={ForgetPassword}
            />
            <Stack.Screen
              name={SCREENS.ResetPassword}
              component={ResetPassword}
            />
            <Stack.Screen
              name={SCREENS.Verification}
              component={Verification}
            />
            <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
          </>
        ) : (
          <>
            <Stack.Screen name={SCREENS.BottomTabs} component={BottomTabs} />

            <Stack.Screen
              name={SCREENS.AllProducts}
              component={SeeAllProducts}
            />
            <Stack.Screen name={SCREENS.Help} component={Help} />

            <Stack.Screen
              name={SCREENS.CompleteProfile}
              component={CompleteProfile}
            />
            <Stack.Screen name={SCREENS.About} component={About} />
            <Stack.Screen
              name={SCREENS.Notification}
              component={Notification}
            />
            <Stack.Screen
              name={SCREENS.OrderHistory}
              component={OrderHistory}
            />
            <Stack.Screen name={SCREENS.AddCard} component={AddCard} />
            <Stack.Screen name={SCREENS.Privacy} component={Privacy} />
            <Stack.Screen name={SCREENS.Return} component={Return} />
            <Stack.Screen name={SCREENS.Terms} component={Terms} />
            <Stack.Screen
              name={SCREENS.PaymentManagmaent}
              component={PaymentManagmaent}
            />
            <Stack.Screen
              name={SCREENS.ProductsDetails}
              component={ProductsDetails}
            />

            <Stack.Screen
              name={SCREENS.SearchProducts}
              component={SearchProducts}
            />
            <Stack.Screen name={SCREENS.TrackOrder} component={TrackOrder} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
