import React from "react";
import { StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

// React Native Paper Components
import { Button, Text } from "react-native-paper";

import { FIREBASE_AUTH } from "../../../FirebaseConfig";

export default function Details() {
  const router = useRouter();

  function onLogout() {
    FIREBASE_AUTH.signOut();
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Details</Text>
      <Button mode="contained" onPress={onLogout}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});
