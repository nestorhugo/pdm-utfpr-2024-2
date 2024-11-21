import {
  Text,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Alert,
} from "react-native";
import React from "react";
import FullScreen from "@/components/containers/Fullscren";
import { router } from "expo-router";
import HeaderHidden from "@/components/headers/HeaderHidden";
import ImageButton from "@/components/ImageButton";

export default function index() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  function handlePress(username: string, password: string) {
    if (username === "fulano" && password === "123") {
      router.push({ pathname: "/haha" });
    } else {
      Alert.alert(
        "Falha na autenticação",
        "Credenciais inválidas, tente novamente"
      );
    }
  }

  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <HeaderHidden />
      <FullScreen center>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={styles.title}>Bem-vindo! 👋</Text>
        <TextInput
          value={username}
          onChangeText={onChangeUsername}
          placeholder="Usuário"
          placeholderTextColor={"gray"}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          placeholder="Senha"
          placeholderTextColor={"gray"}
          style={styles.input}
          secureTextEntry
        />
        <ImageButton
          buttonText="Login"
          source={{ uri: "https://i.ibb.co/myctJfp/Frame-13.png" }}
          imageStyle={styles.loginButton}
          handleButton={() => handlePress(username, password)}
        />
      </FullScreen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: "lightgray",
  },
  logo: {
    width: 300,
    height: undefined,
    aspectRatio: 380 / 115,
    marginBottom: 50,
  },
  loginButton: {
    width: 300,
    height: undefined,
    aspectRatio: 300 / 50,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
