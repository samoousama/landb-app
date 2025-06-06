import React from "react";
import { Image, Text, View, TouchableHighlight, ScrollView,TouchableOpacity} from "react-native";
import colors from "../constants/Colors";

const HorizontalProductView = ({ navigate }) => {
  return (
    <ScrollView
      horizontal={true}
      style={{
        flexDirection: "row",
        height: 235,
        marginBottom: 10,
        marginHorizontal: 7.5,
      }}
    >
      <TouchableOpacity onPress={() => navigate("productDetail")}>
        <View style={{ marginHorizontal: 7.5 }}>
          <Image
            resizeMode={"cover"}
            source={require("../assets/images/tee.png")}
            style={{ height: 160, width: 150, borderRadius: 6 }}
          />
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              color: colors.primaryColor,
              textAlign: "left",
            }}
          >
            Own The Run Tee
          </Text>
          <Text
            style={{
              fontFamily: "avenir-book",
              fontSize: 16,
              color: colors.activeColor,
              textAlign: "left",
            }}
          >
            T-Shirts
          </Text>
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              color: colors.primaryColor,
              textAlign: "left",
            }}
          >
            $35.99
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("productDetail")}>
        <View style={{ marginHorizontal: 7.5 }}>
          <Image
            resizeMode={"cover"}
            source={require("../assets/images/shoe.png")}
            style={{ height: 160, width: 150, borderRadius: 6 }}
          />
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              color: colors.primaryColor,
              textAlign: "left",
            }}
          >
            Pod-S 3.1
          </Text>
          <Text
            style={{
              fontFamily: "avenir-book",
              fontSize: 16,
              color: colors.activeColor,
              textAlign: "left",
            }}
          >
            Sneakers
          </Text>
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              color: colors.primaryColor,
              textAlign: "left",
            }}
          >
            $105.00
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("productDetail")}>
        <View style={{ marginHorizontal: 7.5 }}>
          <Image
            resizeMode={"cover"}
            source={require("../assets/images/tee.png")}
            style={{ height: 160, width: 150, borderRadius: 6 }}
          />
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              color: colors.primaryColor,
              textAlign: "left",
            }}
          >
            Own The Run Tee
          </Text>
          <Text
            style={{
              fontFamily: "avenir-book",
              fontSize: 16,
              color: colors.activeColor,
              textAlign: "left",
            }}
          >
            T-Shirts
          </Text>
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              color: colors.primaryColor,
              textAlign: "left",
            }}
          >
            $35.99
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HorizontalProductView;
