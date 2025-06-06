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
const SignupScreen = props => {
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
      <View style={styles.titleTextContainer}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "montserrat-semibold",
            alignSelf: "center",
            color: "#2D2D2F",
          }}
        >
          Register Now
        </Text>
      </View>
      <View style={styles.registrationForm}>
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Full Name"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Email"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Password"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Confirm password"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Phone"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Upload Sales TX ID"}
        />
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontFamily: "avenir-heavy", fontSize: 24 }}>OR</Text>
      </View>
      <View style={styles.taxIdButton}>
        <TouchableOpacity onPress={() => navigate("taxid")}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "montserrat-semibold",
                }}
              >
                Fill out Tax ID Form Online
              </Text>
            </View>
            <View>
              <Image
                source={require("../assets/images/arrow-right-icon.png")}
                style={{
                  height: 18,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigate("signup")}>
          <View style={styles.registerButton}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "montserrat-semibold",
              }}
            >
              Create an account
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigate("signin")}>
          <View style={styles.loginButton}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                fontFamily: "montserrat-semibold",
              }}
            >
              I have an account
            </Text>
          </View>
        </TouchableOpacity>
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
    height: 45,
    alignSelf: "center",
  },
  titleTextContainer: {
    marginVertical: 10,
  },
  registrationForm: {
    alignSelf: "center",
    width: 310,
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
    width: 311,
    backgroundColor: "#22242A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    color: "white",
    fontSize: 16,
    fontFamily: "montserrat-semibold",
  },
  loginButton: {
    height: 45,
    width: 311,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    fontSize: 16,
    fontFamily: "montserrat-semibold",
  },
  taxIdButton: {
    flex: 1,
    borderColor: "#E6E6E7",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});
SignupScreen.navigationOptions = ({ navigation }) => ({
  headerRight: <InfoHeaderTouchable />,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeft: <HeaderBackArrow goBack={navigation.goBack} />,
});
export default SignupScreen;
