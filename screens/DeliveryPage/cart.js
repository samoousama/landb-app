/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Check Out 
 */

import React, { Component } from 'react'
import {Platform, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Font} from 'expo';

// type Props = {};
const { width } = Dimensions.get('window');

const cart=()=>{

    return(
        <View style={styles.container}>

          <ScrollView style={{flex:1}} scrollEventThrottle={16}>

            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Your bag</Text>
              <Text style={styles.lightText}>You have 3 item in your bag</Text>
            </View>

            <View style={styles.hrLine}></View>  
            <View style={styles.row}>
              <View style={styles.imageColum}>
                  <Image source={require('../../assets/images/product5.png')} style={styles.productImage} />
              </View>
              <View style={styles.descrptionColum}>
                 <Text></Text>  
                 <Text style={styles.productTitle}>3-Stripes Shirt</Text>  
                 <Text style={styles.productUnit}>Unit price </Text>  
                 <Text style={styles.productSize}>Size: 2.5) 20M </Text>  
                 <Text style={styles.productColor}>Color: Tuqoise</Text>  
                 <Text style={styles.productQuantity}>Quantity: 14</Text>  
              </View>
              <View style={styles.priceColum}>
                 <Text style={styles.fullPrice}>$48.99</Text>  
                 <Text style={styles.discountPrice}>$19.40</Text>    
              </View>            
            </View>

           <View style={styles.hrLine}></View>  
            <View style={styles.row}>
              <View style={styles.imageColum}>
                <Image source={require('../../assets/images/product1.png')} style={styles.productImage} />
              </View>
              <View style={styles.descrptionColum}>
                 <Text></Text>  
                 <Text style={styles.productTitle}>Tuxedo Blouse</Text>  
                 <Text style={styles.productUnit}>Unit price </Text>  
                 <Text style={styles.productSize}>Size: 2.5) 20M </Text>  
                 <Text style={styles.productColor}>Color: Tuqoise</Text>  
                 <Text style={styles.productQuantity}>Quantity: 14</Text>  
              </View>
              <View style={styles.priceColum}>
                 <Text style={styles.fullPrice}>$34.99</Text>  
                 <Text style={styles.discountPrice}>$19.40</Text>    
              </View>            
            </View>

            <View style={styles.hrLine}></View>  
            <View style={styles.row}>
              <View style={styles.imageColum}>
                  <Image source={require('../../assets/images/product7.png')} style={styles.productImage} />
              </View>
              <View style={styles.descrptionColum}>
                 <Text></Text>  
                 <Text style={styles.productTitle}>Linear Near Tee</Text>  
                 <Text style={styles.productUnit}>Unit price </Text>  
                 <Text style={styles.productSize}>Size: 2.5) 20M </Text>  
                 <Text style={styles.productColor}>Color: Tuqoise</Text>  
                 <Text style={styles.productQuantity}>Quantity: 14</Text>  
              </View>
              <View style={styles.priceColum}>
                 <Text style={styles.fullPrice}>$19.99</Text>  
                 <Text style={styles.discountPrice}>$19.40</Text>    
              </View>            
            </View>


             <View style={styles.hrLine}></View>  

             <View style={styles.discountRow}>
               <View style={styles.promocodeInput}>
                  <TextInput style={styles.Txtinput} placeholder="Gift Or Promo code" placeholderTextColor = "#333"/>
               </View>
                <View style={styles.promocodeBtn}>
                  <Button
                    title="Add"
                    color="#ffa601"
                    Size="50"
                    //onPress={() => Alert.alert('Simple Button pressed')}
                  />               
               </View>
             </View>

             <View style={styles.hrLine}></View>  

              <View style={styles.middleFont}>
                <Text style={styles.placeOrderDetail}>Aftr this scrn you will get another {"\n"} screen before place your order</Text>
              </View>            

            <View style={styles.orderSection}>
              <View style={styles.row}>
                <View style={styles.colOrder}>
                  <Text style={styles.orderAmount}s>Order amount:</Text>
                  <Text style={styles.amountDiscount}>Your total amount of discount</Text>
                </View>
                <View style={styles.colAmount}>
                  <Text style={styles.orderAmount}s>$103.88</Text>
                  <Text style={styles.amountDiscount}>-35.02</Text>
                </View>
              </View>

              <View style={styles.paymentButton}>
                <Button
                  title="Payment Method"
                  color="#2967ff"
                />
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
    paddingRight:15,
  },
  darkTitle:{
    fontSize:33,
    color:'#2D2D2F',
    fontFamily:"montserrat-bold"
  },
  lightText:{
    fontSize:12,
    color:'#8D8D8E'
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    marginTop:10,
    marginBottom:20
  },
  discountRow:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    marginTop:10,
    marginBottom:10
  },
  imageColum:{
    flex:1,
    marginRight:20
  },
  descrptionColum:{
    flex:2
  },
  productTitle:{
    fontSize:15,
    color:'#2D2D2F',
    // fontWeight:500,
    marginBottom:5
  },
  productUnit:{
    fontSize:14,
    color:'#2967FF',
    marginBottom:5,
  },
  productSize:{
    fontSize:14,
    color:'#8D8D8E'
  },
  productColor:{
    fontSize:13,
    color:'#8D8D8E'
  },
  productQuantity:{
    fontSize:13,
    color:'#8D8D8E'
  },
  priceColum:{
    flex:1
  },
  fullPrice:{
    fontSize:16,
    color:'#2D2D2F',
    // fontWeight:500,    
    textAlign:'right'
  },
  discountPrice:{
    fontSize:14,
    color:'#8D8D8E',
    textAlign:'right',
    marginTop:2
  },
  hrLine:{
    borderBottomWidth:1,
    borderBottomColor:'#F6F6F6',
  },
  Txtinput:{
    backgroundColor:'#F6F6F6',
    width:'100%',
    paddingBottom:4,
    paddingLeft:15,
    color:'#2D2D2F',
    borderBottomWidth: 1,
    marginBottom:10,
    borderBottomColor:'#fff',
    fontSize:16,
    height:40,
    borderRadius:6
  },
  promocodeInput:{
    flex:3,
    marginRight:15,
    marginTop:10
  },
  promocodeBtn:{
    flex:1,
    marginLeft:10,
    marginTop:10
  },
  middleFont:{
    justifyContent: 'center',
    alignItems: 'center',
    margin:25
  },
  placeOrderDetail:{
    fontSize:14,
    lineHeight:20,
    color:'#8D8D8E'
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
    // fontWeight:600,
    color:'#2D2D2F',
    fontSize:18
  },
  amountDiscount:{
    fontSize:14,
    color:'#8D8D8E'
  },
  paymentButton:{
    marginLeft:15,
    paddingRight:15
  },
  productImage:{
    height:100
  }, 

})

cart.navigationOptions = () => ({
    header: null,
  });

export default cart;