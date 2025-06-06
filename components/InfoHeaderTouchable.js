import React from "react";
import { TouchableHighlight, Image,TouchableOpacity } from "react-native";
export default InfoHeaderTouchable = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require("../assets/images/info-icon.png")}
        style={{
          width: 24,
          height: 24,
          marginRight: 20,
          marginTop: 10,
          marginBottom: 10,
        }}
      />
    </TouchableOpacity>
  );
};
