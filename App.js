import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  Font.loadAsync({
    "montserrat-semibold": require("./assets/fonts/Montserrat-SemiBold.otf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.otf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.otf"),
    "avenir-book": require("./assets/fonts/Avenir-Book.ttf"),
    "avenir-heavy": require("./assets/fonts/Avenir-Heavy.ttf"),
    "avenir-medium": require("./assets/fonts/Avenir-Medium.ttf")
  });
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {});

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png"),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
