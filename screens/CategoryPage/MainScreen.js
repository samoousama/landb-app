import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableHighlight,
  ScrollView,
  ImageBackground,
  TextInput,TouchableOpacity
} from "react-native";
import ProductList from "../../components/ProductList";
import { SvgXml } from "react-native-svg";
import HorizontalProductView from "../../components/HorizontalProductView";
import colors from "../../constants/Colors";
import { CrossIcon } from "../../components/Icons";
const MainScreen = props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.previewContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[
            {
              image: require("../../assets/images/new_collection.png"),
              key: "0",
              title: "New Collection",
            },
            {
              image: require("../../assets/images/summer_sale.png"),
              key: "1",
              title: "Summer Collection",
            },
          ]}
          renderItem={({ item }) => (
            <ImageBackground
              source={item.image}
              imageStyle={{ borderRadius: 6 }}
              style={styles.previewImage}
            >
              <Text
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  color: "white",
                  fontSize: 36,
                  fontFamily: "montserrat-bold",
                }}
              >
                {item.title}
              </Text>
            </ImageBackground>
          )}
        />
      </View>
      <View style={styles.newArrivalsRow}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <View>
            <View style={styles.newArrivalText}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "montserrat-semibold",
                }}
              >
                New Arrival
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate("mainPage")}>
              <View style={styles.showAllText}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Show All
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ProductList navigate={navigate} />
      <View style={styles.newArrivalsRow}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <View>
            <View style={styles.newArrivalText}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "montserrat-semibold",
                }}
              >
                What&apos;s trending
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate("mainPage")}>
              <View style={styles.showAllText}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Show All
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }} horizontal={true}>
        <View style={{ flexDirection: "column", height: 205 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 330,
              height: 70,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../../assets/images/bag.png")}
                style={{ height: 44, width: 44, borderRadius: 6 }}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "montserrat-medium",
                  }}
                >
                  VFA Boost
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Backpacks
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#9775FA",
                borderRadius: 6,
                width: 90,
                height: 32,
                paddingVertical: 10,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "montserrat-medium",
                }}
              >
                $53.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 330,
              height: 70,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../../assets/images/bag.png")}
                style={{ height: 44, width: 44, borderRadius: 6 }}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "montserrat-medium",
                  }}
                >
                  VFA Boost
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Backpacks
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#9775FA",
                borderRadius: 6,
                width: 90,
                height: 32,
                paddingVertical: 10,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "montserrat-medium",
                }}
              >
                $53.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 330,
              height: 70,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../../assets/images/bag.png")}
                style={{ height: 44, width: 44, borderRadius: 6 }}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "montserrat-medium",
                  }}
                >
                  VFA Boost
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Backpacks
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#9775FA",
                borderRadius: 6,
                width: 90,
                height: 32,
                paddingVertical: 10,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "montserrat-medium",
                }}
              >
                $53.00
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", height: 205 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 330,
              height: 70,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../../assets/images/bag.png")}
                style={{ height: 44, width: 44, borderRadius: 6 }}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "montserrat-medium",
                  }}
                >
                  VFA Boost
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Backpacks
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#9775FA",
                borderRadius: 6,
                width: 90,
                height: 32,
                paddingVertical: 10,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "montserrat-medium",
                }}
              >
                $53.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 330,
              height: 70,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../../assets/images/bag.png")}
                style={{ height: 44, width: 44, borderRadius: 6 }}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "montserrat-medium",
                  }}
                >
                  VFA Boost
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Backpacks
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#9775FA",
                borderRadius: 6,
                width: 90,
                height: 32,
                paddingVertical: 10,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "montserrat-medium",
                }}
              >
                $53.00
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: 330,
              height: 70,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../../assets/images/bag.png")}
                style={{ height: 44, width: 44, borderRadius: 6 }}
              />
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "montserrat-medium",
                  }}
                >
                  VFA Boost
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Backpacks
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#9775FA",
                borderRadius: 6,
                width: 90,
                height: 32,
                paddingVertical: 10,
                paddingHorizontal: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "montserrat-medium",
                }}
              >
                $53.00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.newArrivalsRow}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <View>
            <View style={styles.newArrivalText}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "montserrat-semibold",
                }}
              >
                History
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate("mainPage")}>
              <View style={styles.showAllText}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#2967FF",
                    fontFamily: "avenir-book",
                  }}
                >
                  Show All
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <HorizontalProductView navigate={navigate} />
      <View style={{ backgroundColor: colors.greyBackgroundColor }}>
        <View style={styles.newArrivalsRow}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <View>
              <View style={styles.newArrivalText}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "montserrat-semibold",
                  }}
                >
                  Newsletter
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigate("mainPage")}>
                <View style={styles.showAllText}>
                  <SvgXml
                    style={styles.viewFilterRightIcons}
                    xml={CrossIcon}
                    fill={colors.greyColor}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TextInput
            style={{
              height: 45,
              backgroundColor: "white",
              color: colors.primaryColor,
              marginVertical: 10,
              paddingLeft: 10,
              borderRadius: 6,
              fontFamily: "avenir-book",
              fontSize: 18,
              width: 335,
              elevation: 1,
              alignSelf: "center",
            }}
            onChangeText={text => text}
            value={""}
            placeholder={"Email"}
          />
        </View>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigate("appHome")}>
            <View
              style={{
                height: 45,
                width: 335,
                backgroundColor: colors.activeColor,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
                marginHorizontal: 10,
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
                Subscribe
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: colors.greyColor,
            fontSize: 14,
            fontFamily: "avenir-book",
            marginVertical: 10,
            width: 235,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          By clicking on Subscribe button you agree to accept
          <Text style={{ color: colors.activeColor }}> Privacy Policy</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  topTabBarContainer: {
    flex: 1,
    flexDirection: "row",
  },
  topTabUnselected: {
    color: "#2D2D2F",
  },
  topTabSelected: {
    color: "#2967FF",
  },
  topTabs: {
    marginHorizontal: 10,
    fontSize: 18,
    fontFamily: "montserrat-semibold",
  },
  previewContainer: {
    height: 180,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  previewImage: {
    marginRight: 10,
    width: 320,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  newArrivalsRow: {
    flex: 1,
    marginTop: 10,
  },
  newArrivalText: {
    color: "#2D2D2F",
  },
  newArrivalImage: {
    width: "100%",
    borderRadius: 6,
  },
});

MainScreen.navigationOptions = () => ({
  header: null,
  // headerTitle: (
  //     <ScrollView horizontal={true} style={styles.topTabBarContainer} showsHorizontalScrollIndicator={false}>
  //         <TouchableHighlight>
  //             <Text style={styles.topTabs}>All</Text>
  //         </TouchableHighlight>
  //         <Text style={styles.topTabs}>Women's</Text>
  //         <Text style={styles.topTabs}>Plus</Text>
  //         <Text style={styles.topTabs}>Footwear</Text>
  //         <Text style={styles.topTabs}>Accessories</Text>
  //     </ScrollView>
  // ),
  // headerStyle: {
  //     height: 52,
  //     borderBottomColor: "#E6E6E7",
  //     borderBottomWidth: 2,
  //     elevation: 0,
  //     shadowOpacity: 0
  // },
  // headerTitleContainerStyle:{
  //     height: 52,
  //     paddingTop: 0
  // }
});
export default MainScreen;
