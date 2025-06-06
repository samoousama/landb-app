import React from "react";
import { Image, Text, View, TouchableHighlight,TouchableOpacity } from "react-native";
const ProductList = props => {
  const { singleView, navigate } = props;
  const productWidth = singleView ? "100%" : "50%";
  let imageStyle = {
    width: singleView ? 335 : 160,
    borderRadius: 6,
    height: singleView ? 430 : 160,
    alignSelf: "flex-start",
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 12.5,
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-start",
        justifyContent: singleView ? "center" : "flex-start",
      }}
    >
      <TouchableOpacity onPress={() => navigate("productDetail")}>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 7.5,
            width: productWidth,
          }}
        >
          <Image
            resizeMode={"cover"}
            source={require("../assets/images/tee.png")}
            style={imageStyle}
          />
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              marginTop: 15,
            }}
          >
            Falcon Clear Pink
          </Text>
          <Text
            style={{
              fontFamily: "avenir-book",
              fontSize: 16,
              color: "#2967FF",
            }}
          >
            Sneakers
          </Text>
          <Text style={{ fontFamily: "montserrat-medium", fontSize: 16 }}>$70</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("productDetail")}>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 7.5,
            width: productWidth,
          }}
        >
          <Image
            resizeMode={"cover"}
            source={require("../assets/images/tee.png")}
            style={imageStyle}
          />
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              marginTop: 15,
            }}
          >
            Falcon Clear Pink
          </Text>
          <Text
            style={{
              fontFamily: "avenir-book",
              fontSize: 16,
              color: "#2967FF",
            }}
          >
            Sneakers
          </Text>
          <Text style={{ fontFamily: "montserrat-medium", fontSize: 16 }}>$70</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("productDetail")}>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 7.5,
            width: productWidth,
          }}
        >
          <Image
            resizeMode={"cover"}
            source={require("../assets/images/tee.png")}
            style={imageStyle}
          />
          <Text
            style={{
              fontFamily: "montserrat-medium",
              fontSize: 16,
              marginTop: 15,
            }}
          >
            Falcon Clear Pink
          </Text>
          <Text
            style={{
              fontFamily: "avenir-book",
              fontSize: 16,
              color: "#2967FF",
            }}
          >
            Sneakers
          </Text>
          <Text style={{ fontFamily: "montserrat-medium", fontSize: 16 }}>$70</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ProductList;
