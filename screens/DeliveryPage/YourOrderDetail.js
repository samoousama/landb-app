/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Check Out 
 */

import React, { Component, useState } from 'react'
import {Platform,TouchableOpacity, StatusBar, StyleSheet, StackNavigator, Text, View, ScrollView, Image, Dimensions, Button, TextInput,  ImageBackground} from 'react-native'

import colors from "../../constants/Colors";
import Modal from 'react-native-modal';

const CarPage=props=>{
  
    const { navigate } = props.navigation;
    const [count, setCount] = useState(0);
    const [val, setVal] = useState(0);
    const [data, setData] = useState([{id:1, label:'orange',color:'#fcba03'},
    {id:2, label:'Green',color:'#029e1e'},{id:3, label:'Voilet Blue',color:'#b509e0'}
    ]);
    const [selectedColor, setSelectedColor] = useState('');

    return(

        <View style={styles.container}>
          <ScrollView scrollEventThrottle={16}>

            <View style={styles.spaingTitle}>
              <Text style={styles.darkTitle}>Your bag</Text>
              <Text style={styles.lightText}>You have 3 item in your bag</Text>
            </View>
            
            <View style={styles.hrLine}></View>  
    
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <View style={styles.swipeView}>

                <View style={styles.mainRow}>
                <View style={{flex:4}}>
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

                    <View style={styles.colorDropdown}>

                     <TouchableOpacity style={styles.numberOption}>   
                        <View style={{flex:1}}>
                         <Text style={styles.itemsNumber}>
                          1
                         </Text>
                        </View>
                        <View style={{
                             alignItems: 'flex-end',
                             flex:1,
                             marginTop:10,
                             marginRight:5
                          }}>
                            <Image source={require('../../assets/images/ArrowDown.png')} style={styles.colordropdownArrow} />   
                          </View>
                    </TouchableOpacity>   

                     <TouchableOpacity style={styles.colorOption}  onPress={()=>setVal(1)}> 
                      <View style={{flex:1}}>
                            <View style={styles.colorSelect}></View>
                          </View>
                          <View style={{
                             alignItems: 'flex-end',
                             flex:1,
                             marginTop:10,
                             marginRight:5
                          }}>
                            <Image source={require('../../assets/images/ArrowDown.png')} style={styles.colordropdownArrow} />   
                        </View>
                        </TouchableOpacity>  
                          <Modal isVisible={val}>
                            <View
                              style={{
                                flex: 1,
                                backgroundColor: '#FFF',
                                paddingTop: 10,
                                paddingLeft:10,
                                paddingRight:10
                              }}>
                              {  data.map(x=>{
                              return <TouchableOpacity
                                  style={{ flexDirection: 'row', padding: 0, marginBottom:10}}
                                  onPress={() => setVal(x.id)}>
                                  <View
                                    style={{
                                      width: 30,
                                      height: 30,
                                      borderRadius: 30,
                                      backgroundColor: x.color,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                    }}>
                                    {val == x.id && (
                                      <Text style={{fontSize:15,fontWeight:'bold',paddingTop:2, color:'white'}}>{'✓'}</Text>
                                      
                                    )}
                                  </View>
                                  <Text style={{ marginLeft: 20, fontSize: 18, paddingTop: 4}}>
                                    {x.label}
                                  </Text>
                                </TouchableOpacity>
                              }) }
                                <Button style={{marginTop:20}} title="Save" onPress={() => {setCount(0);
                                setSelectedColor(data.filter(x=>x.id===val)[0].label);
                                }} />
                              </View>
              
                          </Modal>
                        </View>


                
                </View>
                <View style={{flex:1}}>
                  <View style={styles.deleteButton}>
                    <Image source={require('../../assets/images/Remove.png')} style={styles.deleteIcon} />
                  </View>
                </View>
              </View>

                </View>
              </ScrollView>     


                 <View style={styles.hrLine}></View>  
                  <View style={styles.row}>
                    <View style={styles.imageColum}>
                      <Image source={require('../../assets/images/product1.png')} style={styles.productImage} />
                    </View>
                    <View style={styles.descrptionColum}>
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


              <View style={styles.colorDropdown}>
              
               <TouchableOpacity style={styles.numberOption}>   
                  <View style={{flex:1}}>
                   <Text style={styles.itemsNumber}>
                    1
                   </Text>
                  </View>
                  <View style={{
                       alignItems: 'flex-end',
                       flex:1,
                       marginTop:10,
                       marginRight:5
                    }}>
                      <Image source={require('../../assets/images/ArrowDown.png')} style={styles.colordropdownArrow} />   
                    </View>
              </TouchableOpacity>   

              <Modal  transparent={true}
                     >
                <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                  <View style={styles.numberPopup}>
                    <Text style={styles.numberItem}> Select Item </Text>


                   <ScrollView scrollEventThrottle={10}>   
                      <View style={styles.numberList}>
                        <Text style={styles.valueNum}>2</Text>
                        <Text style={styles.valueNum}>3</Text>
                        <Text style={styles.valueNum}>4</Text>
                        <Text style={styles.valueNum}>5</Text>
                        <Text style={styles.valueNum}>6</Text>
                        <Text style={styles.valueNum}>7</Text>
                        <Text style={styles.valueNum}>7</Text>
                        <Text style={styles.valueNum}>7</Text>
                      </View>
                    </ScrollView> 

                  </View>
                </View>
              </Modal>



               <TouchableOpacity style={styles.colorOption}  onPress={()=>setVal(1)}> 
                <View style={{flex:1}}>
                      <View style={styles.colorSelect}></View>
                    </View>
                    <View style={{
                       alignItems: 'flex-end',
                       flex:1,
                       marginTop:10,
                       marginRight:5
                    }}>
                      <Image source={require('../../assets/images/ArrowDown.png')} style={styles.colordropdownArrow} />   
                  </View>
                  </TouchableOpacity>  
                    <Modal isVisible={val}>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: '#FFF',
                          paddingTop: 10,
                          paddingLeft:10,
                          paddingRight:10
                        }}>
                        {  data.map(x=>{
                        return <TouchableOpacity
                            style={{ flexDirection: 'row', padding: 0, marginBottom:10}}
                            onPress={() => setVal(x.id)}>
                            <View
                              style={{
                                width: 30,
                                height: 30,
                                borderRadius: 30,
                                backgroundColor: x.color,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              {val == x.id && (
                                <Text style={{fontSize:15,fontWeight:'bold',paddingTop:2, color:'white'}}>{'✓'}</Text>
                                
                              )}
                            </View>
                            <Text style={{ marginLeft: 20, fontSize: 18, paddingTop: 4}}>
                              {x.label}
                            </Text>
                          </TouchableOpacity>
                        }) }
                          <Button style={{marginTop:20}} title="Save" onPress={() => {setCount(0);
                          setSelectedColor(data.filter(x=>x.id===val)[0].label);
                          }} />
                        </View>
        
                    </Modal>
                  </View>


                  <View style={styles.hrLine}></View>  
                  <View style={styles.row}>
                    <View style={styles.imageColum}>
                        <Image source={require('../../assets/images/product7.png')} style={styles.productImage} />
                    </View>
                    <View style={styles.descrptionColum}>
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
                  <Text style={styles.orderAmountNum}s>$103.88</Text>
                  <Text style={styles.amountDiscountNum}>-35.02</Text>
                </View>
              </View>

              <View style={styles.paymentButton}>
              <TouchableOpacity onPress={() => navigate("billing")}>
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
                Checkout
              </Text>
            </View>
          </TouchableOpacity>
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
    fontSize:30,
    color:'#2D2D2F',
    fontFamily:"montserrat-bold"
  },
  lightText:{
    fontSize:14,
    color:'#8D8D8E',
    fontFamily:"avenir-book"
  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    marginTop:10,
    marginBottom:20
  },
  mainRow:{
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    fontSize:16,
    color:'#2D2D2F',
    fontFamily:"montserrat-medium",
    marginBottom:5
  },
  productUnit:{
    fontSize:14,
    color:'#2967FF',
    marginBottom:7,
    fontFamily:"avenir-book"
  },
  productSize:{
    fontSize:14,
    color:'#8D8D8E',
    marginBottom:3,
    fontFamily:"avenir-book"
  },
  productColor:{
    fontSize:13,
    color:'#8D8D8E',
    marginBottom:3,
    fontFamily:"avenir-book"
  },
  productQuantity:{
    fontSize:13,
    color:'#8D8D8E',
    marginBottom:3,
    fontFamily:"avenir-book"
  },
  priceColum:{
    flex:1
  },
  fullPrice:{
    fontSize:16,
    color:'#2D2D2F',
    fontFamily:"montserrat-medium",
    textAlign:'right'
  },
  discountPrice:{
    fontSize:14,
    color:'#8D8D8E',
    textAlign:'right',
    marginTop:2,
    fontFamily:"avenir-book"
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
    fontSize:18,
    height:40,
    borderRadius:6,
    fontFamily:"avenir-book"
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
    color:'#8D8D8E',
    fontFamily:"avenir-book"
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
  productImage:{
    height:100,
    width:90,
    marginTop:5
  }, 
  colorDropdown:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:15,
    paddingRight:15,
    marginBottom:15
  },
  numberOption:{
    backgroundColor:"#F6F6F6",
    borderRadius:6,
    padding:10,
    flex:1,    
    height:44,
    marginRight:15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:20,
    paddingRight:20
  },
  colorOption:{
    backgroundColor:"#F6F6F6",
    borderRadius:6,
    padding:10,
    flex:1,
    height:44,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:20,
    paddingRight:20
  },
  colorSelect:{
    backgroundColor:'#05C2BD',
    width:22,
    height:22,
    borderRadius:50,
  },
  colordropdownArrow:{
    width:14,
    height:8,
  },
  itemsNumber:{
    color:'#2D2D2F',
    fontSize:18,
    fontFamily:"avenir-book"
  },
  numberPopup:{
    width: 300,
    height: 300,
    backgroundColor:'white',
    borderRadius:5
  },
  numberItem:{
    fontSize:18,
    fontFamily:"montserrat-semibold",
    color:'#2D2D2F',
    textAlign:'center',
    paddingTop:10
  },
  numberList:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueNum:{
    fontSize:18,
    fontFamily:"avenir-book",
    padding:10,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
  },
  deleteButton:{
    width:90,
    height:200,
    backgroundColor:'#FF3B30',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    marginLeft:22,
    paddingRight:20
  },
  deleteIcon:{
    width:24,
    height:24,
  },
  swipeView:{
    width:440
  }
})




CarPage.navigationOptions = () => ({
  header: null,
});

export default CarPage;