import React from "react";
import { Image, TouchableHighlight, TouchableOpacity } from "react-native";
export default HeaderBackArrow = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Image
        style={{
          flex: 1,
          resizeMode: "contain",
          marginHorizontal: 20,
        }}
        source={require("../assets/images/arrow_left.png")}
      />
    </TouchableOpacity>
  );
};
