/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Help & info
 */

import React, { Component } from 'react'
import {Platform, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'

const InfoPage=props=>{
  const { navigate } = props.navigation;

    return(
      
      <View style={styles.container}>
          <ScrollView scrollEventThrottle={16}>

            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Help & Info</Text>
            </View>
            <View style={styles.hrLine}></View>  

            <View style={styles.userInfo}>
               <Image source={require('../../assets/images/help.png')} style={styles.helpinfLogo} />
               <Text style={styles.brandName}>LUCKY & BLESSED.</Text>
               <Text style={styles.accuserInfo}>455 Larkspur Dr, California {"\n"} Springs, CA 929226, USA</Text>
            </View>
            <View style={styles.lightDarkborder}></View> 

            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Call</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>685-568-6568</Text>
               </View> 
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Email</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>info@gmail.com</Text>
               </View> 
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Online Orders</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>455.235.4748</Text>
               </View> 
            </View>  
            <View style={styles.lightDarkborder}></View> 

            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Company</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Locations</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Wholesale info</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Use and Sales TX ID form</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.lightDarkborder}></View> 
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Return Policy</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>FAQs</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Upcoming Tradeshows</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
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
    fontSize:18,
    textAlign:'center',
    color:'#2D2D2F',
    fontFamily:"montserrat-semibold"
  },
  userInfo:{
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    marginTop:30
  },
  helpinfLogo:{
    height:100,
    resizeMode:'contain',
    marginBottom:10
  },
  brandName:{
    fontSize:19,
    color:"#231F20",
    marginTop:10,
  },
  accuserInfo:{
    marginTop:16,
    fontSize:16,
    color:'#2D2D2F',
    marginBottom:40,
    fontFamily:"avenir-book"
  },
  lightDarkborder:{
    borderBottomWidth:10,
    borderBottomColor:'#F6F6F6',
  },
  accList:{
    borderBottomWidth:1,
    borderBottomColor:'#f6f6f6',
    height:50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10
  },
  listLeft:{
    flex:1
  },
  listRight:{
    flex:1
  },
  acclistName:{
    fontSize:18,
    color:'#2D2D2F',
    fontFamily:"montserrat-semibold"
  },
  acclistDetail:{
    color:'#2D2D2F',
    fontSize:18,
    textAlign:'right',
    paddingTop:4,
    fontFamily:"avenir-book"
  },
  arrowImage:{
    width:15,
    height:15,
    resizeMode: 'contain',
    marginLeft:13,
    marginTop:6,
    // textAlign:'right',
  },
  rightArow:{
    textAlign:'right',
  },


})


InfoPage.navigationOptions = () => ({
  header: null,
});

export default InfoPage;