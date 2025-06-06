import React, { Component } from 'react'
import {Platform, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'
import NumericInput from 'react-native-numeric-input'
import Icon from 'react-native-vector-icons/FontAwesome';

const OrderPage=props=>{
  const { navigate } = props.navigation;

    return(

      <View style={styles.container}>
          <ScrollView scrollEventThrottle={16}>

            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Your Orders</Text>
            </View>
            <View style={styles.hrLine}></View>  


                <View style={styles.orderMain}>

                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>In Transit</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                </View>

              <View style={styles.row}>
                <View style={styles.imageColum}>
                   <Image source={require('../../assets/images/product5.png')} style={styles.productImage} />
                </View>
                <View style={styles.descrptionColum}>
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

              <View style={styles.row}>
                <View style={styles.imageColum}>
                   <Image source={require('../../assets/images/product3.png')} style={styles.productImage} />
                </View>
                <View style={styles.descrptionColum}>
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


              <View style={styles.row}>
                <View style={styles.imageColum}>
                   <Image source={require('../../assets/images/product1.png')} style={styles.productImage} />
                </View>
                <View style={styles.descrptionColum}>
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

              <View style={styles.titleLink}>
                 <Text style={styles.mainTitle}>Track package</Text>
                 <Image source={require('../../assets/images/Arrowright.png')} style={styles.linkArrow} />
              </View>

              <View style={styles.lightDarkborder}></View>

                <View style={styles.orderList}>
                  <View style={{flex:4}}>
                    <Text style={styles.orderNumber}>#458307092400</Text>
                    <Text style={styles.tabFor}>Tap for details</Text>
                  </View>
                  <View style={{flex:2}}>
                    <Text style={styles.orderName}>Completed</Text>
                    <Text style={styles.orderDate}>May 4, 2020</Text>
                  </View>
                </View>

              <View style={styles.row}>
                <View style={styles.imageColum}>
                   <Image source={require('../../assets/images/product2.png')} style={styles.productImage} />
                </View>
                <View style={styles.descrptionColum}>
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

              <View style={styles.row}>
                <View style={styles.imageColum}>
                   <Image source={require('../../assets/images/product7.png')} style={styles.productImage} />
                </View>
                <View style={styles.descrptionColum}>
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


              <View style={styles.titleLink}>
                 <Text style={styles.mainTitle}>Track package</Text>
                 <Image source={require('../../assets/images/Arrowright.png')} style={styles.linkArrow} />
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
  orderList:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:10,
    paddingTop:10
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
    color:'#2D2D2F',
    fontFamily:"montserrat-semibold",
    textAlign:'right'
  },
  orderDate:{
    fontSize:14,
    color:'#8D8D8E',
    textAlign:'right'
  },
  arrowRight:{
    width:15,
    height:15,
    textAlign:'right',
    marginLeft:20,
    resizeMode: 'contain',
    marginTop:9
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    marginTop:10,
    marginBottom:7
  },
  imageColum:{
    flex:1,
    marginRight:20
  },
  descrptionColum:{
    flex:2
  },
  productTitle:{
    fontSize:16,
    color:'#2D2D2F',
    fontFamily:"montserrat-semibold",
    marginBottom:5
  },
  productUnit:{
    fontSize:14,
    color:'#2967FF',
    marginBottom:5,
    fontFamily:"avenir-book"
  },
  productSize:{
    fontSize:14,
    color:'#8D8D8E',
    fontFamily:"avenir-book",
    marginBottom:2
  },
  productColor:{
    fontSize:14,
    color:'#8D8D8E',
    fontFamily:"avenir-book",
    marginBottom:2
  },
  productQuantity:{
    fontSize:14,
    color:'#8D8D8E',
    fontFamily:"avenir-book",
    marginBottom:2
  },
  priceColum:{
    flex:1
  },            
  fullPrice:{
    fontSize:16,
    color:'#2D2D2F',
    fontFamily:"montserrat-semibold",
    textAlign:'right'
  },
  discountPrice:{
    fontSize:14,
    color:'#8D8D8E',
    textAlign:'right',
    marginTop:2,
    fontFamily:"avenir-book",
  },
  productImage:{
    height:100,
    width:90,
    marginTop:5
  },
  hrLine:{
    borderBottomWidth:1,
    borderBottomColor:'#b5b5b7',
    marginTop:10
  },
  titleLink:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:15
  },
  mainTitle:{
    fontSize:18,
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F',
    flex:1
  },
  linkArrow:{
    width:15,
    height:15,
    textAlign:'right',
    marginTop:5,
    resizeMode: 'contain',
  },
  lightDarkborder:{
    borderBottomWidth:10,
    borderBottomColor:'#F6F6F6',
    marginTop:5
  }

})



CarPage.navigationOptions = () => ({
  header: null,
});

export default OrderPage;