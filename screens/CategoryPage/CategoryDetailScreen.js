import React from "react";
import { ScrollView, View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import colors from "../../constants/Colors";
import { SvgXml } from "react-native-svg";
import { ArrowRight } from "../../components/Icons";
import { TouchableHighlight } from "react-native-gesture-handler";

const CategoryDetailScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigate("productList")}>
        <View style={styles.categoryContainer}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              resizeMode={"cover"}
              source={require("../../assets/images/athletics-pack.png")}
              style={styles.categoryListImage}
            />
            <View style={{ marginHorizontal: 20, alignSelf: "center" }}>
              <Text style={styles.categoryTitle}>Jeans</Text>
              <Text style={styles.categorySubTitle}>Jeans</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <SvgXml
              style={styles.viewFilterRightIcons}
              xml={ArrowRight}
              fill={colors.primaryColor}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("productList")}>
        <View style={styles.categoryContainer}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Image
              resizeMode={"cover"}
              source={require("../../assets/images/tee.png")}
              style={styles.categoryListImage}
            />
            <View style={{ marginHorizontal: 20, alignSelf: "center" }}>
              <Text style={styles.categoryTitle}>Jeans</Text>
              <Text style={styles.categorySubTitle}>Jeans</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <SvgXml
              style={styles.viewFilterRightIcons}
              xml={ArrowRight}
              fill={colors.primaryColor}
            />
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    color: colors.primaryColor,
    paddingHorizontal: 20,
  },
  categoryContainer: {
    height: 100,
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    borderBottomColor: colors.borderColor,
  },
  categoryListImage: {
    height: 96,
    width: 96,
    borderRadius: 6,
  },
  categoryTitle: {
    fontFamily: "montserrat-semibold",
    fontSize: 24,
    color: colors.primaryColor,
  },
  categorySubTitle: {
    fontFamily: "avenir-book",
    fontSize: 14,
    color: colors.activeColor,
  },
  viewFilterRightIcons: {
    marginHorizontal: 6,
    alignSelf: "center",
  },
});
CategoryDetailScreen.navigationOptions = () => ({
  header: null,
});
export default CategoryDetailScreen;
