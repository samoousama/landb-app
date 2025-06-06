/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Success Screen
 */

import React, { Component } from 'react'
import {Platform, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'
import colors from "../../constants/Colors";
import { SvgXml } from "react-native-svg";
import { SmileIcon } from "../../components/Icons";

const SuccessPage=props=>{
    const { navigate } = props.navigation;
  
    return(
      
      <View style={styles.container}>
          <ScrollView scrollEventThrottle={16}>


            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Success</Text>
            </View>        

            <View style={styles.congrulationCaption}>
               <Image source={require('../../assets/images/Smile.png')} style={styles.smileImage} />
               <Text style={styles.acceptedText}>Congratulations!{"\n"}Your order is{"\n"}accepted</Text>
               <Text style={styles.itemsMessage}>Your items are on the way {"\n"} and should arrive shortly </Text>
               <Text style={styles.orderNumber}>Order number: 48392000012 </Text>
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
    paddingTop:10
  },
  darkTitle:{
    fontSize:30,
    fontFamily:"montserrat-bold",
    color:'#2D2D2F',
  },
  congrulationCaption:{
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 70,
  },
  smileImage:{
    height:40,
    width:40,
  },
  acceptedText:{
    fontSize:24,
    marginTop:10,
    color:'#2D2D2F',
    fontFamily:"montserrat-semibold",
    textAlign:'center'
  },
  itemsMessage:{
    marginTop:30,
    fontSize:16,
    marginBottom:20,
    color:'#2D2D2F',
    fontFamily:"avenir-book"
  },
  orderNumber:{
    textAlign:'center',
    fontFamily:"montserrat-bold",
    fontSize:20,
    color:'#000'
  }    

})

SuccessPage.navigationOptions = () => ({
    header: null,
  });
  
  export default SuccessPage;