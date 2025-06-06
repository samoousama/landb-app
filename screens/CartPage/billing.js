import React from "react";
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableHighlight,TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { OkIcon, AddIcon } from "../../components/Icons";
import colors from "../../constants/Colors";

const BillingPage = props => {
    const { navigate } = props.navigation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.shippingTextContainer}>
        <Text style={styles.shippingText}>Shipping will be added later </Text>
      </View>
      <View style={styles.billingProfileContainer}>
        <View style={styles.billingProfileBox}>
          <View style={styles.billingProfileBoxOkIcon}>
            <SvgXml
              style={styles.viewFilterRightIcons}
              xml={OkIcon}
              fill={"white"}
            />
          </View>
          <Text
            style={{
              fontFamily: "avenir-book",
              fontSize: 14,
              textAlign: "center",
              color: colors.secondaryColor,
              marginVertical: 20,
            }}
          >
            Billing and delivery info are the same
          </Text>
        </View>
        <View style={styles.billingProfileBox}>
          <View style={styles.billingProfileBoxAddIcon}>
            <SvgXml
              style={styles.viewFilterRightIcons}
              xml={AddIcon}
              fill={"#B7B7B7"}
            />
          </View>
          <Text
            style={{
              fontFamily: "avenir-book",
              textAlign: "center",
              fontSize: 14,
              color: colors.secondaryColor,
              marginVertical: 20,
            }}
          >
            Create a new profile
          </Text>
        </View>
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
      <View style={{ height: 132, backgroundColor: colors.greyBackgroundColor }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginVertical: 10
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "montserrat-semibold",
                fontSize: 18,
                textAlign: "left",
                color: colors.primaryColor,
              }}
            >
              Order Amount:
            </Text>
            <Text
              style={{
                fontFamily: "avenir-book",
                fontSize: 14,
                textAlign: "left",
                color: colors.secondaryColor,
              }}
            >
              Your total amount of discount:
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "montserrat-semibold",
                fontSize: 18,
                textAlign: "right",
                color: colors.primaryColor,
              }}
            >
              $103.88
            </Text>
            <Text
              style={{
                fontFamily: "avenir-book",
                fontSize: 14,
                textAlign: "right",
                color: colors.secondaryColor,
              }}
            >
              - $55.02
            </Text>
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigate("payment")}>
            <View
              style={{
                height: 45,
                width: 335,
                backgroundColor: colors.activeColor,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
                color: "white",
                fontSize: 16,
                fontFamily: "montserrat-semibold",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "montserrat-semibold",
                  marginVertical: 10,
                }}
              >
                Checkout
              </Text>
            </View>
          </TouchableOpacity>
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
    color: colors.primaryColor,
  },
  shippingTextContainer: {
    height: 60,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#007DE3",
    justifyContent: "center",
    alignItems: "center",
  },
  shippingText: {
    fontFamily:"avenir-medium",
    fontSize: 18,
    color: colors.primaryColor,
  },
  billingProfileContainer: {
    flex: 1,
    marginHorizontal: 12.5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  billingProfileBox: {
    flex: 1,
    height: 135,
    borderRadius: 6,
    borderColor: colors.borderColor,
    marginVertical: 10,
    marginHorizontal: 7.5,
    borderWidth: 2,
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  billingProfileBoxOkIcon: {
    height: 44,
    width: 44,
    backgroundColor: "#5DD136",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 44,
    marginTop: 20,
  },
  billingProfileBoxAddIcon: {
    height: 44,
    width: 44,
    backgroundColor: colors.greyBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 44,
    marginTop: 20,
  },
  registrationForm: {
    marginHorizontal: 20,
    flex: 1,
  },
  registrationField: {
    height: 45,
    backgroundColor: colors.greyBackgroundColor,
    marginBottom: 10,
    borderRadius: 6,
    fontFamily: "avenir-book",
    fontSize: 18,
    paddingLeft:15
  },
});
BillingPage.navigationOptions = () => ({
  header: null,
});

export default BillingPage;
