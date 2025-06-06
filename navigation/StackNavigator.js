import { createStackNavigator } from "react-navigation-stack";

import PreviewScreen from "../screens/PreviewScreen";
import SignupScreen from "../screens/SignupScreen";
import TaxIdScreen from "../screens/TaxIdScreen";
import SigninScreen from "../screens/SignInScreen";
import AppHome from "../screens/AppHome";
const defaultNavigator = createStackNavigator(
  {
    preview: { screen: PreviewScreen },
    signup: SignupScreen,
    signin: SigninScreen,
    taxid: TaxIdScreen,
    appHome: AppHome,
  },
  {
    initialRouteName: "preview",
  }
);
export default defaultNavigator;
