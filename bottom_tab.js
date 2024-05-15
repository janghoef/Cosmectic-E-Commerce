import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/bottom/home';
import {COLORS, SCREENS} from '../constant';
import Icon, {Icons} from '../component/icons';
import {View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../common/responsivefunction';
import Profile from '../screens/bottom/profile';
import Cart from '../screens/bottom/cart/cart';
import Setting from '../screens/bottom/setting/setting';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const HanleIcon = ({focused, iconName, iconType}) => {
    return (
      <View style={{}}>
        <Icon
          type={iconType}
          name={iconName}
          color={focused ? COLORS.yellow : COLORS.white}
        />
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          position: 'absolute',
          bottom: hp(1),
          left: wp(2),
          right: wp(2),
          borderRadius: wp(2),
          height: hp(7),
        },
      }}>
      <Tab.Screen
        name={SCREENS.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HanleIcon
                focused={focused}
                iconName="home"
                iconType={Icons.Entypo}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={SCREENS.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HanleIcon
                focused={focused}
                iconName="user-alt"
                iconType={Icons.FontAwesome5}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.Cart}
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HanleIcon
                focused={focused}
                iconName="shopping-cart"
                iconType={Icons.FontAwesome5}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.Setting}
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HanleIcon
                focused={focused}
                iconName="settings-sharp"
                iconType={Icons.Ionicons}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
