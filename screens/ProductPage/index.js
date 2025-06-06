import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,TouchableOpacity
} from "react-native";
import colors from "../../constants/Colors";
import { SvgXml } from "react-native-svg";
import { FeedIcon, SquareIcon, ViewBox } from "../../components/Icons";
import ProductList from "../../components/ProductList";

const ProductPage = ({ navigation }) => {
  const { navigate } = navigation;
  const [singleView, setSingleView] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Jeans</Text>
        <Text style={styles.headerSubtext}>5 products</Text>
      </View>
      <View style={styles.viewFilterContainer}>
        <View style={{ flexDirection: "row" }}>
          <SvgXml name={"md-link"} xml={FeedIcon} fill={colors.primaryColor} />
          <Text style={styles.viewFilterText}>Sort By</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => setSingleView(!singleView)}>
            <SvgXml
              style={styles.viewFilterRightIcons}
              xml={ViewBox}
              fill={singleView ? colors.primaryColor : colors.activeColor}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSingleView(!singleView)}>
            <SvgXml
              style={styles.viewFilterRightIcons}
              xml={SquareIcon}
              fill={!singleView ? colors.primaryColor : colors.activeColor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ProductList singleView={singleView} navigate={navigate}></ProductList>
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
  headerContainer: {
    flex: 1,
    height: 70,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
  },
  headerTitle: {
    fontFamily: "montserrat-bold",
    fontSize: 30,
    color: colors.primaryColor,
  },
  headerSubtext: {
    fontFamily: "avenir-book",
    fontSize: 14,
    color: colors.secondaryColor,
  },
  viewFilterContainer: {
    height: 52,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "space-between",
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
  },
  viewFilterText: {
    fontFamily: "montserrat-medium",
    fontSize: 16,
    color: colors.primaryColor,
    marginHorizontal: 15,
  },
  viewFilterRightIcons: {
    marginHorizontal: 6,
  },
});

ProductPage.navigationOptions = () => ({
  header: null,
});

export default ProductPage;
