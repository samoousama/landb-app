import React from "react";
import moment from "moment";
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

const TaxIdScreen = props => {
  let currentDate = () => {
    return moment().format("MM - DD - YYYY");
  };
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
          Use and Sale Tax Form
        </Text>
      </View>
      <View style={styles.registrationForm}>
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Name of purchaser, firm or agency"}
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
          placeholder={"Address, City, State, ZIP code"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Texas Sales & Use Tax Permit Num"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Out-of-state or Federal Taxpay Num"}
        />
        <TextInput
          style={styles.registrationField}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Mexico registration form"}
        />
      </View>
      <View style={{ alignSelf: "center", width: 320, marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: "avenir-book",
            fontSize: 16,
            textAlign: "center",
            color: "#2D2D2F",
          }}
        >
          I, the purchaser named above, claim the right to make a non-taxable
          purchase (for resale of the taxable items described below or on the
          attached order or invoice) from:
        </Text>
      </View>
      <View style={{ alignSelf: "center", width: 320, marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: "avenir-book",
            fontSize: 16,
            textAlign: "center",
            color: "#2D2D2F",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>L&B</Text> - 12801 N STEMMONS FWY STE
          710 FARMERS BRANCH, TX 75234
        </Text>
      </View>
      <View style={{ alignSelf: "center", width: 320, marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: "avenir-book",
            fontSize: 16,
            textAlign: "center",
            color: "#2D2D2F",
            fontWeight: "bold",
          }}
        >
          Description of the type of business activity generally engaged in or type
          of items normally sold by the purchaser:
        </Text>
      </View>
      <View style={styles.registrationForm}>
        <TextInput
          style={styles.registrationTextArea}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"type here"}
        />
      </View>
      <View style={{ alignSelf: "center", width: 320, marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "avenir-book",
            fontSize: 16,
            textAlign: "center",
            color: "#2D2D2F",
            fontWeight: "bold",
          }}
        >
          This certificate should be furnished to the supplier. Do not send the
          completed certificate to the Comptroller of Public Accounts.
        </Text>
      </View>
      <View style={styles.registrationForm}>
        <TextInput
          style={styles.registrationTextArea}
          onChangeText={text => onChangeText(text)}
          value={""}
          placeholder={"Sign here"}
        />
      </View>
      <View style={{ alignSelf: "center", width: 320, marginVertical: 10 }}>
        <Text
          style={{
            fontFamily: "avenir-book",
            fontSize: 16,
            textAlign: "left",
            color: "#2D2D2F",
            fontWeight: "bold",
          }}
        >
          Date: {currentDate()}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigate("signin")}>
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
    marginVertical: 10,
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
  registrationTextArea: {
    height: 110,
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
    backgroundColor: "#2967FF",
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
TaxIdScreen.navigationOptions = ({ navigation }) => ({
  headerRight: <InfoHeaderTouchable />,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeft: <HeaderBackArrow goBack={navigation.goBack} />,
});
export default TaxIdScreen;
