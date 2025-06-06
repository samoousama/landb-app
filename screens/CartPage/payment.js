/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Payment Screen
 */

import React, { Component } from 'react'
import {Platform,TouchableOpacity, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'
// import NumericInput from 'react-native-numeric-input'
// import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../../constants/Colors";
const PaymentScreen=props=>{
    const { navigate } = props.navigation;
    return(
      
      <View style={styles.container}>
          <ScrollView scrollEventThrottle={16}>

            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Payment</Text>
              <Text style={styles.lightFont}>Secure Checkout</Text>
            </View>

          
            <View style={styles.creditNav}>
               <Text style={styles.creditCardlink}>Credit Card</Text>
               <Text style={styles.paypalLink}>PayPal</Text>
               <Text style={styles.callpikLink}>Call/Pickup</Text>
            </View>
            <View style={styles.hrLine}></View>  

            <View style={styles.paymentDetail}>
              <Text style={styles.payTitle}>Delivery details:</Text>
              <Text style={styles.payDescrption}>UPS Shipping - shipping will be added later</Text>
            </View>
            <View style={styles.hrLine}></View>  
            <View style={styles.paymentDetail}>
               <View style={{flex:4}}>  
                 <Text style={styles.payTitle}>Shipping address:</Text>
                 <Text style={styles.payDescrption}>Monika Walem, 455,Larkpur Dr, Cabophonia Spinga, CA 9898989, USA</Text>         
               </View>
               <View style={{flex:1}}>  
                 <Text style={styles.editLink}>Edit</Text>
               </View>                
            </View>
            <View style={styles.hrLine}></View>  
            <View style={styles.paymentDetail}>
               <View style={{flex:4}}>  
                 <Text style={styles.payTitle}>Gift Certificate Or Promo Code:</Text>
                 <Text style={styles.payDescrptiongery}>123656987488484 - $200 added</Text>         
               </View>
               <View style={{flex:1}}>  
                 <Text style={styles.editLink}>Edit</Text>
               </View>                
            </View>
            <View style={styles.hrLine}></View>  
            <View style={styles.paymentDetail}>
               <View style={{flex:4}}>  
                 <Text style={styles.payTitle}>Credit Card</Text>
               </View>
               <View style={{flex:1}}>  
                 <Text style={styles.editLink}>Clear All</Text>
               </View>                
            </View>
          
            <View style={styles.creditInput}>
              <TextInput style={styles.Txtinput} placeholder="Card holder name" placeholderTextColor = "#333"/> 
              <TextInput style={styles.Txtinput} placeholder="Card number" placeholderTextColor = "#333"/> 

              <View style={styles.formRow}>
                <View style={styles.formColum}>
                   <TextInput style={styles.Txtinput} placeholder="mm" placeholderTextColor = "#333"/>
                </View>
                <View style={styles.formSpace}>
                  <TextInput style={styles.Txtinput} placeholder="yyyy" placeholderTextColor = "#333"/>
                </View>
                <View style={styles.formColum}>
                  <TextInput style={styles.Txtinput} placeholder="CVV" placeholderTextColor = "#333"/>
                </View>
              </View>

              <TextInput style={styles.TxtinputleaveComment} placeholder="You can leave us a comment here" placeholderTextColor = "#333"/> 

            </View>


            <View style={styles.orderSection}>
              <View style={styles.row}>
                <View style={styles.colOrder}>
                  <Text style={styles.orderAmount}s>Order amount:</Text>
                  <Text style={styles.amountDiscount}>Your total amount of discount</Text>
                </View>
                <View style={styles.colAmount}>
                  <Text style={styles.orderAmountNum}s>$103.88</Text>
                  <Text style={styles.amountDiscountNum}>-35.02</Text>
                </View>
              </View>

              <View style={styles.paymentButton}>
              <TouchableOpacity onPress={() => navigate("success")}>
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
                Place Order
              </Text>
            </View>
          </TouchableOpacity>
                {/* <Button
                  title="Place Order"
                  color="#2967FF"
                  // onPress={() => Alert.alert('Simple Button pressed')}
                /> */}
              </View>  
            </View>



        </ScrollView>
      </View>  
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }, 
  spaingTitle:{
    padding:10,
    paddingLeft:15,
    paddingRight:15
  },
  darkTitle:{
    fontSize:30,
    fontFamily:"montserrat-bold",
    color:'#2D2D2F'
  },
  lightFont:{
    fontSize:14,
    color:'#8D8D8E',
    fontFamily:"avenir-book"
  },
  creditNav:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    marginTop:20,
    marginBottom:10
  },
  creditCardlink:{
    flex:1,
    fontSize:18,
    fontFamily:"montserrat-semibold",
    color:"#2967FF"
  },
  paypalLink:{
    flex:1,
    fontSize:18,
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F',
    textAlign:'center'
  },
  callpikLink:{
    flex:1,
    fontSize:18,
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F',
    textAlign:'right'
  },
  hrLine:{
    borderBottomWidth:1,
    borderBottomColor:'#E0E0E0',
  },
  paymentDetail:{
    marginTop:10,
    paddingLeft:15,
    paddingRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  payTitle:{
    fontSize:18,
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F',
  },
  payDescrption:{
    fontSize:15,
    paddingTop:10,
    marginBottom:15,
    fontFamily:"avenir-book"
  },
  payDescrptiongery:{
    fontSize:14,
    paddingTop:10,
    marginBottom:15,
    color:'#000',    
    fontFamily:"avenir-book"
  },
  editLink:{
    fontSize:17,
    color:"#2967FF",
    textAlign:'right',
    fontFamily:"avenir-book"
  },
  creditInput:{
    marginTop:16,
    paddingLeft:15,
    paddingRight:15,
  },
  Txtinput:{
    backgroundColor:'#F6F6F6',
    paddingBottom:4,
    paddingLeft:15,
    color:'#2D2D2F',
    borderBottomWidth: 1,
    marginBottom:10,
    borderBottomColor:'#fff',
    fontSize:18,
    height:40,
    borderRadius:6,
    fontFamily:"avenir-book"
  },
  TxtinputleaveComment:{
    backgroundColor:'#F6F6F6',
    paddingBottom:4,
    paddingLeft:15,
    color:'#2D2D2F',
    borderBottomWidth: 1,
    marginBottom:10,
    borderBottomColor:'#fff',
    fontSize:18,
    height:100,
    textAlign:'center',
    borderRadius:6,
    fontFamily:"avenir-book"
  },
  formRow:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  formColum:{
    flex:1,
  },
  formSpace:{
    flex:1,
    marginLeft:10,
    marginRight:10
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:10
  },
  orderSection:{
    backgroundColor:'#F6F6F6',    
    paddingBottom:20
  },
  colOrder:{
    flex:2,
    paddingLeft:10,
  },
  colAmount:{
    flex:1,
    paddingRight:10,
    textAlign:'right'
  },
  orderAmount:{
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F',
    fontSize:18
  },
  amountDiscount:{
    fontSize:14,
    color:'#8D8D8E',
    fontFamily:"avenir-book"
  },
  orderAmountNum:{
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F',
    fontSize:18,
    textAlign:'right'
  },
  amountDiscountNum:{
    fontSize:14,
    color:'#8D8D8E',
    textAlign:'right',
    fontFamily:"avenir-book"
  },

  paymentButton:{
    marginLeft:15,
    paddingRight:15
  },
  checkIcon:{
    backgroundColor:'#5dd136',
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
  }

  

})

PaymentScreen.navigationOptions = () => ({
    header: null,
  });
  
  export default PaymentScreen;

