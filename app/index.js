import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import React, { useEffect } from "react";
import { useRouter } from "expo-router";

import { AppRegistry } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from "react-native-paper";

import { name as appName } from "../app.json";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  const router = useRouter();

  useEffect(() => {
    // Wait for 3 seconds, then navigate to the login screen
    const timer = setTimeout(() => {
      router.replace("login");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="displayLarge">uGc</Text>
      </View>
      <View style={styles.bottomText}>
        <Text variant="labelLarge">from</Text>
        <Text variant="labelLarge">Unity Growth Co.</Text>
      </View>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  bottomText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
});

AppRegistry.registerComponent(appName, () => App);
