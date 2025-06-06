import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ScrollView,TouchableOpacity
} from "react-native";
import InfoHeaderTouchable from "../components/InfoHeaderTouchable";
import HeaderBackArrow from "../components/HeaderBackArrow";
const SigninScreen = props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={{
            flex: 1,
            resizeMode: "contain",
          }}
          source={require("../assets/images/landb-logo.png")}
        />
      </View>
      <View style={styles.registrationForm}>
        <TextInput
          style={styles.registrationField}
          onChangeText={text => text}
          value={""}
          placeholder={"Email"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => text}
          value={""}
          placeholder={"Password"}
        />
      </View>
      <View style={styles.signinSignupButtonContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <View>
            <TouchableOpacity onPress={() => navigate("signup")}>
              <View style={styles.registerButton}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontFamily: "montserrat-semibold",
                  }}
                >
                  Sign up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate("appHome")}>
              <View style={styles.loginButton}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontFamily: "montserrat-semibold",
                  }}
                >
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    color: "#2D2D2F",
  },
  logoContainer: {
    height: 169,
    alignSelf: "center",
  },
  titleTextContainer: {
    marginVertical: 10,
  },
  registrationForm: {
    alignSelf: "center",
    width: 310,
    marginVertical: 10,
  },
  registrationField: {
    height: 45,
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 6,
    fontFamily: "avenir-book",
    fontSize: 18,
  },
  textContainer: {
    height: 90,
    marginTop: 25,
  },
  registerButton: {
    height: 45,
    width: 150,
    backgroundColor: "#22242A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginHorizontal: 10,
    color: "white",
    fontSize: 16,
    fontFamily: "montserrat-semibold",
  },
  loginButton: {
    height: 45,
    width: 150,
    backgroundColor: "#2967FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginHorizontal: 10,
    color: "white",
    fontSize: 16,
    fontFamily: "montserrat-semibold",
  },
  signinSignupButtonContainer: {
    flex: 1,
    marginVertical: 10,
  },
});
SigninScreen.navigationOptions = ({ navigation }) => ({
  headerRight: <InfoHeaderTouchable />,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeft: <HeaderBackArrow goBack={navigation.goBack} />,
});
export default SigninScreen;
