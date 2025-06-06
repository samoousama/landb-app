import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function PreviewScreen(props) {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{ resizeMode: "contain", flex: 1 }}
          source={require("../assets/images/landb-logo.png")}
        />
      </View>
      <View style={styles.previewContainer}>
        <FlatList
          horizontal={true}
          data={[
            {
              image: require("../assets/images/preview-1.png"),
              key: "0",
            },
            {
              image: require("../assets/images/preview-2.png"),
              key: "1",
            },
          ]}
          renderItem={({ item, index, separators }) => (
            <Image source={item.image} style={styles.previewImage} />
          )}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "montserrat-semibold",
            alignSelf: "center",
            color: "#2D2D2F",
          }}
        >
          New Collection
        </Text>
        <View style={{ alignSelf: "center", width: 180 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "avenir-book",
              alignSelf: "center",
              color: "#2D2D2F",
            }}
          >
            You are registering for a{" "}
            <Text style={{ fontWeight: "bold" }}>WHOLESALE</Text> account.
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <TouchableOpacity onPress={() => navigate("signup")}>
          <View style={styles.registerButton}>
            <Text style={{ color: "white" }}>Register Now</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("signin")}>
          <View style={styles.loginButton}>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

PreviewScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 45,
  },
  logoContainer: {
    maxHeight: 100,
    alignSelf: "center",
  },
  previewContainer: {
    height: 360,
    marginTop: 10,
  },
  previewImage: {
    marginRight: 10,
    borderRadius: 6,
  },
  textContainer: {
    height: 90,
    marginTop: 25,
  },
  registerButton: {
    height: 45,
    width: 145,
    backgroundColor: "#22242A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    color: "white",
    fontSize: 16,
    fontFamily: "montserrat-medium",
    marginHorizontal: 10,
  },
  loginButton: {
    height: 45,
    width: 145,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    color: "black",
    fontSize: 16,
    fontFamily: "montserrat-medium",
    marginHorizontal: 10,
  },
});
