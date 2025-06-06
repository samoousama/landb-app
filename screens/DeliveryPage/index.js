/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Your Order
 */

import React, { Component } from 'react'
import {Platform,TouchableOpacity, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'
const DeliveryPage = props =>{

  const { navigate } = props.navigation;
    return(
      
      <View style={styles.container}>
          <ScrollView scrollEventThrottle={16}>

            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Your Orders</Text>
            </View>
            <View style={styles.hrLine}></View>  

            <View style={styles.orderMain}>

              <TouchableOpacity onPress={() => navigate("")}>
                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>In Transit</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>
                </TouchableOpacity>

                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>In Transit</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>



                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>Deliverd</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>


                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>In Transit</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>



                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>Deliverd</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>

                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>In Transit</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>



                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>Deliverd</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>

                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>In Transit</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>



                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>Deliverd</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
                </View>


                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>Deliverd</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                  <View style={{textAlign:'right'}}>
                    <Image source={require('../../assets/images/Arrowright.png')} style={styles.arrowRight} />
                  </View>
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
    paddingTop:10
  },
  darkTitle:{
    fontSize:20,
    fontFamily:"montserrat-semibold",
    textAlign:'center',
    color:'#2D2D2F'
  },
  lightFont:{
    fontSize:12,
    color:'#ccc'
  },
  orderList:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    paddingBottom:10,
    paddingTop:10
  },
  hrLine:{
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    marginBottom:10
  },
  orderNumber:{
    fontSize:18,
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F'
  },
  tabFor:{
    fontSize:14,
    color:'#8D8D8E',
    fontFamily:"avenir-book"
  },
  orderName:{
    fontSize:18,
    color:'#4b80ff',
    fontFamily:"montserrat-semibold",
    textAlign:'right'
  },
  orderDate:{
    fontSize:14,
    color:'#8D8D8E',
    textAlign:'right',
    fontFamily:"avenir-book"
  },
  arrowRight:{
    width:10,
    height:15,
    textAlign:'right',
    marginLeft:20,
    marginTop:13
  }
      

})
DeliveryPage.navigationOptions = () => ({
  header: null,
});

export default DeliveryPage;