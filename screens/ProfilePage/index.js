/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Account
 */

import React, { Component } from 'react'
import {Platform,TouchableOpacity, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'
import colors from "../../constants/Colors";

const ProfilePage=props=>{
    const { navigate } = props.navigation;


    return(
      
      <View style={styles.container}>
          <ScrollView scrollEventThrottle={16}>

            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Account</Text>
            </View>

            <View style={styles.hrLine}></View>  

            <View style={styles.userInfo}>
               <Image source={require('../../assets/images/product6.png')} style={styles.accuserImage} />
               <Text style={styles.accuserName}>Monika Willems</Text>
               <Text style={styles.accuserInfo}>455 Larkspur Dr, California {"\n"} Springs, CA 929226, USA</Text>
            </View>
            <View style={styles.lightDarkborder}></View> 

            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Full Name</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>Monika Willems</Text>
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
                 <Text style={styles.acclistName}>Address</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>455 Larkaspur Dr</Text>
               </View> 
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Payment</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>Visa *** *** *** 6598</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.lightDarkborder}></View> 

            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Wishlist</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>5</Text>
               </View> 
               <View style={styles.rightArow}>
                 <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>My bag</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>3</Text>
               </View> 
               <View style={styles.rightArow}>
                 <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>My Orders</Text>
               </View> 
               <View style={styles.listRight}>
                 <Text style={styles.acclistDetail}>1 in tansit</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.lightDarkborder}></View> 
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Newsletter</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  
            <View style={styles.accList}>
               <View style={styles.listLeft}>
                 <Text style={styles.acclistName}>Settings</Text>
               </View> 
               <View style={styles.rightArow}>
                  <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowImage} />
               </View>
            </View>  

            <View style={styles.logOutbtn}>
            <TouchableOpacity onPress={() => navigate("appHome")}>
            <View
              style={{
                height: 45,
                width: 320,
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
                Log out
              </Text>
            </View>
          </TouchableOpacity>
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
    fontWeight:'bold',
    textAlign:'center',
    color:'#2D2D2F'
  },
  userInfo:{
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    marginTop:30
  },
  accuserImage:{
    width:140,
    height:140,
    borderRadius:70,
    marginBottom:10
  },
  accuserName:{
    fontSize:24,
    color:'#2D2D2F',
    marginTop:10,
    fontFamily: "montserrat-semibold",
  },
  accuserInfo:{
    marginTop:12,
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
    flex:1,
    fontFamily: "montserrat-semibold",
    fontSize:16
  },
  listRight:{
    flex:1
  },
  acclistName:{
    fontSize:18,
    color:'#2D2D2F',
    fontFamily: "montserrat-semibold",
  },
  acclistDetail:{
    color:'#2D2D2F',
    fontSize:16,
    textAlign:'right',
    paddingTop:4,
    fontFamily:"avenir-book"
  },
  arrowImage:{
    width:'100%',
    height:15,
    resizeMode: 'contain',
    marginLeft:13,
    marginTop:6,
  },
  rightArow:{
    marginRight:10
  },
  logOutbtn:{
    backgroundColor:'#F6F6F6',
    padding:15,
    paddingLeft:20   
  }


})

ProfilePage.navigationOptions = () => ({
    header: null,
  });
  
  export default ProfilePage;