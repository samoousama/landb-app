import React from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import MainScreen from "./MainScreen";
import CategoryDetailScreen from "./CategoryDetailScreen";

const CategoryPage = createMaterialTopTabNavigator(
  {
    all: MainScreen,
    "Women's": CategoryDetailScreen,
    Plus: CategoryDetailScreen,
    Footwear: CategoryDetailScreen,
    Accessories: CategoryDetailScreen,
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#2967FF",
      inactiveTintColor: "#2D2D2F",
      showLabel: true,
      scrollEnabled: true,
      indicatorStyle: {
        opacity: 0,
      },
      style: {
        justifyContent: "flex-start",
        backgroundColor: "transparent",
        paddingHorizontal: 5,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: "#E6E6E7",
        borderBottomWidth: 2,
      },
      tabStyle: {
        width: "auto",
        marginHorizontal: 5,
      },
    },
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ tintColor }) => (
        <Text
          displayName={navigation.state.routeName}
          style={{
            fontSize: 18,
            fontFamily: "montserrat-semibold",
            color: tintColor,
          }}
        >
          {navigation.state.routeName}
        </Text>
      ),
    }),
  }
);

CategoryPage.navigationOptions = () => ({
  header: null,
});
export default CategoryPage;
