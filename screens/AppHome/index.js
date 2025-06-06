import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import InfoHeaderTouchable from "../../components/InfoHeaderTouchable";
import HeaderBackArrow from "../../components/HeaderBackArrow";
import CategoryPage from "../CategoryPage";
import DeliveryPage from "../DeliveryPage";
import cart from "../DeliveryPage/cart";
import CartPage from "../CartPage";
import PaymentScreen from '../CartPage/payment';
import SuccessPage from '../CartPage/success';
import ProfilePage from '../ProfilePage';
import BillingPage from '../CartPage/billing';
import { SvgXml } from "react-native-svg";
import {
  HomeIcon,
  DeliveryTruckIcon,
  CartIcon,
  InfoIcon,
  UserIcon,
} from "../../components/Icons";
import ProductPage from "../ProductPage";
import ProductDetailScreen from "../ProductPage/ProductDetailScreen";
import InfoPage from "../InfoPage";

const HomeStack = createStackNavigator(
  {
    home: CategoryPage,
    productList: ProductPage,
    productDetail: ProductDetailScreen,
  },
  {
    initialRouteName: "home",
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: "",
  tabBarIcon: ({ focused, tintColor }) => (
    <View
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgXml focused={focused} name={"md-link"} xml={HomeIcon} fill={tintColor} />
    </View>
  ),
};

HomeStack.path = "";

const DeliveryStack = createStackNavigator(
  {
    delivery: DeliveryPage,
    // delivery:cart
  },
  {
    initialRouteName: "delivery",
  }
);
DeliveryStack.navigationOptions = {
  tabBarLabel: "",
  tabBarIcon: ({ tintColor }) => (
    <View
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgXml xml={DeliveryTruckIcon} fill={tintColor} />
    </View>
  ),
};
DeliveryStack.path = "";

const CartStack = createStackNavigator(
  {
    cart: CartPage,
    payment:PaymentScreen,
    success:SuccessPage,
    billing:BillingPage,
  },
  {
    initialRouteName: "cart",
  }
);
CartStack.navigationOptions = {
  tabBarLabel: "",
  tabBarIcon: ({ focused, tintColor }) => (
    <View
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgXml focused={focused} name={"md-link"} xml={CartIcon} fill={tintColor} />
    </View>
  ),
};
CartStack.path = "";

const InfoStack = createStackNavigator(
  {
    info: InfoPage,
  },
  {
    initialRouteName: "info",
  }
);
InfoStack.navigationOptions = {
  tabBarLabel: "",
  tabBarIcon: ({ focused, tintColor }) => (
    <View
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgXml focused={focused} name={"md-link"} xml={InfoIcon} fill={tintColor} />
    </View>
  ),
};
InfoStack.path = "";

const UserStack = createStackNavigator(
  {
    profile: ProfilePage,
  },
  {
    initialRouteName: "profile",
  }
);
UserStack.navigationOptions = {
  tabBarLabel: "",
  tabBarIcon: ({ focused, tintColor }) => (
    <View
      style={{
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgXml focused={focused} name={"md-link"} xml={UserIcon} fill={tintColor} />
    </View>
  ),
};
UserStack.path = "";

const MainPage = createBottomTabNavigator(
  {
    HomeStack,
    DeliveryStack,
    CartStack,
    UserStack,
    InfoStack,
  },
  {
    defaultNavigationOptions: () => ({
      tabBarOptions: {
        activeTintColor: "#2967FF",
        inactiveTintColor: "#D0D0D0",
        showLabel: false,
        style: {
          justifyContent: "center",
          flexDirection: "row",
          height: 50,
          borderWidth: 0,
        },
        tabStyle: {
          flex: 0,
          height: 48,
          width: 48,
          elevation: 0,
          marginHorizontal: 13,
        },
      },
    }),
  }
);
MainPage.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: "#E6E6E7",
    borderBottomWidth: 2,
  },
  headerRight: <InfoHeaderTouchable />,
  headerLeft: <HeaderBackArrow goBack={navigation.goBack} />,
});
export default MainPage;
