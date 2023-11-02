import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Button,
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";

import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function SplashScreen() {
  const auth = FIREBASE_AUTH;
  const router = useRouter();

  const [username, setUsername] = useState("abc@gmail.com");
  const [password, setPassword] = useState("Abc@1234");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onRegister = () => {
    router.replace("register");
  };

  const onLogin = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        router.replace("(Home)/Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const onForgetPassword = () => {
    if (username === "abc" && password === "Abc@1234")
      router.replace("(Home)/Home");
  };
  return (
    <PaperProvider theme={theme}>
      <View style={styles.containerTopLeft}></View>
      <View style={styles.containerTopRight}></View>
      <View style={styles.container}>
        <Text variant="displayMedium">uGc</Text>
        <Text variant="titleMedium">Unity Growth Co.</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          label="Username"
          mode="outlined"
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          value={password}
          label="Password"
          mode="outlined"
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          onChangeText={(text) => setPassword(text)}
          right={
            password?.length > 0 &&
            (secureTextEntry ? (
              <TextInput.Icon
                icon="eye-off"
                onPress={() => setSecureTextEntry(false)}
              />
            ) : (
              <TextInput.Icon
                icon="eye"
                onPress={() => setSecureTextEntry(true)}
              />
            ))
          }
        />
        <Button onPress={onForgetPassword}>Forget password?</Button>
        <Button onPress={onLogin} mode="contained">
          Login
        </Button>

        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTopLeft: {
    width: 300,
    height: 300,
    backgroundColor: "#C88EF6",
    borderRadius: 300,

    top: -100,
    left: -100,
    position: "absolute",
    zIndex: -1,
  },
  containerTopRight: {
    width: 600,
    height: 600,
    backgroundColor: "#DBCAE9",
    borderRadius: 600,

    top: 50,
    right: -200,
    position: "absolute",
  },
  textInput: {
    width: "80%",
  },
});
