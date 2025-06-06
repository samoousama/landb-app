import React from "react";
import colors from "../../constants/Colors";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Picker,TouchableOpacity
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
// import { SvgXml } from "react-native-svg";
// import { FeedIcon, SquareIcon, ViewBox } from "../../components/Icons";

const ProductDetailScreen = () => {
  const placeholder = {
    label: '6',
    value: null,
    color: '#000',
  };

  const placeholder_2 = {
    label: 'GREEN SNAKE',
    value: null,
    color: '#000',
  };
  const selected_2={label:'GREEN SNAKE', value:1};
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.productInfoContainer}>
        <View style={{ maxWidth: "50%" }}>
          <Text style={styles.productName}>RED MINT AZTEC BELL SLEEVE BLAZER</Text>
        </View>
        <View>
          <Text style={styles.productPrice}>$21.50</Text>
          <Text style={styles.productPricingDetail}>Prepack Price: $129.00</Text>
        </View>
      </View>
      <Image
        resizeMode={"cover"}
        source={require("../../assets/images/athletics-pack.png")}
        style={styles.productPrimaryImage}
      />
      <View style={styles.productSecondaryImageContainer}>
        <Image
          resizeMode={"cover"}
          source={require("../../assets/images/athletics-pack.png")}
          style={styles.productSecondaryImage}
        />
        <Image
          resizeMode={"cover"}
          source={require("../../assets/images/athletics-pack.png")}
          style={styles.productSecondaryImage}
        />
        <Image
          resizeMode={"cover"}
          source={require("../../assets/images/athletics-pack.png")}
          style={styles.productSecondaryImage}
        />
      </View>
      <View style={styles.addToCartContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 7.5,
          }}
        >
          <View style={{height: 44,
              width: 112,
              backgroundColor: "white",
              color:'black',
              borderRadius: 6,
              justifyContent:'center',
              alignItems:'center'
              }}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder={placeholder}
            style={pickerSelectStyles}
            
            items={[
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
                { label: '8', value: '8' },

            ]}
        />
          </View>
          
          {/* <Picker
            mode={"dropdown"}
            style={{
              height: 44,
              width: 112,
              backgroundColor: "white",
              borderRadius: 6,
            }}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Picker
            mode={"dropdown"}
            style={{
              height: 44,
              width: 196,
              backgroundColor: "white",
              borderRadius: 6,
            }}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker> */}

<View style={{height: 44,
              width: 196,
              backgroundColor: "white",
              color:'black',
              borderRadius: 6,
              justifyContent:'center',
              alignItems:'center'
              }}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            // placeholder={placeholder_2}
            value={selected_2}
            style={pickerSelectStyles}
            
            items={[
                { label: 'GREEN SNAKE', value: '1' },
                { label: 'GREEN SNAKE', value: '2' },
                { label: 'GREEN SNAKE', value: '3' },
                { label: 'GREEN SNAKE', value: '4' },
                { label: 'GREEN SNAKE', value: '5' },
                { label: 'GREEN SNAKE', value: '6' },
                { label: 'GREEN SNAKE', value: '7' },
                { label: 'GREEN SNAKE', value: '8' },

            ]}
        />
          </View>

        </View>
        <View style={{ marginVertical: 7.5 }}>
          <Text style={styles.addToCartText}>
            Minimum quantity for &quot;RED MINT AZTEC BELL SLEEVE BLAZER&quot; is 6.
          </Text>
        </View>
        {/* <TouchableOpacity style={styles.addToCartButton}>
         
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "montserrat-semibold",
              }}
            >
              Add to cart
            </Text>
          
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontFamily: "avenir-book",
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontFamily: "avenir-book",
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 7.5,
    color: colors.primaryColor,
  },
  productInfoContainer: {
    height: 70,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 7.5,
  },
  productName: {
    fontFamily: "montserrat-medium",
    fontSize: 16,
    color: colors.primaryColor,
    textAlign: "left",
  },
  productPricingDetail: {
    fontFamily: "avenir-book",
    fontSize: 14,
    color: colors.secondaryColor,
    textAlign: "right",
  },
  productPrice: {
    fontFamily: "montserrat-medium",
    fontSize: 16,
    color: colors.primaryColor,
    textAlign: "right",
  },
  productPrimaryImage: {
    height: 335,
    width: 335,
    borderRadius: 6,
    alignSelf: "center",
    paddingHorizontal: 15,
    marginVertical: 7.5,
  },
  productSecondaryImageContainer: {
    flexDirection: "row",
    marginVertical: 7.5,
    paddingHorizontal: 7.5,
    justifyContent: "center",
  },
  productSecondaryImage: {
    height: 100,
    width: 100,
    borderRadius: 6,
    marginHorizontal: 7.5,
    alignSelf: "center",
  },
  addToCartContainer: {
    padding: 20,
    height: 195,
    backgroundColor: colors.greyBackgroundColor,
  },
  addToCartText: {
    fontFamily: "avenir-book",
    fontSize: 14,
    color: colors.secondaryColor,
    textAlign: "center",
  },
  addToCartButton: {
    height: 45,
    width: 335,
    backgroundColor: colors.activeColor,
    // alignSelf: "center",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 6,
    marginHorizontal: 10,
    color: "white",
    fontSize: 16,
    fontFamily: "montserrat-semibold",
  },
});

ProductDetailScreen.navigationOptions = () => ({
  header: null,
});

export default ProductDetailScreen;
