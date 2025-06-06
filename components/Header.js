import {
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity>
        <View style={styles.backButton}>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    height: 45,
    flexDirection: "row",
  },
  backButton: {
    alignSelf: "flex-start",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default Header;
