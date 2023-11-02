import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

import { Button, Text, TextInput } from "react-native-paper";

import { updateProfile } from "@firebase/auth";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

export default function UpdateProfile() {
  const router = useRouter();
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;
  const [username, setUsername] = useState(user.displayName);

  function onUpdateProfile() {
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {
        console.log("Profile updated");
      })
      .catch((error) => {
        console.log("Error updating profile");
      });
    router.back("Profile");
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">UpdateProfile</Text>
      <TextInput
        style={styles.textInput}
        value={username}
        label="Username"
        mode="outlined"
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <Button mode="contained" onPress={onUpdateProfile}>
        Update Profile
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
