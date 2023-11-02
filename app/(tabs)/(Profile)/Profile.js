import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

// React Native Paper Components
import { Button, Text, TextInput } from "react-native-paper";

import { FIREBASE_AUTH } from "../../../FirebaseConfig";

export default function Profile() {
  const router = useRouter();
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;
  const [username, setUsername] = useState(user.displayName);

  function onLogout() {
    auth.signOut();
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">{user.displayName}</Text>
      <Button mode="contained" onPress={() => router.push("UpdateProfile")}>
        Update Profile
      </Button>
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
