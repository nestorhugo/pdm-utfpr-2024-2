import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";
import React from "react";

export default function Login() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleLogin = () => {
    console.log(`username: ${username},\npassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://m.media-amazon.com/images/I/715vwvP5ZEL._h1_.png",
        }}
      />
      <Text>Faça Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={onChangeUsername}
      />

      <TextInput
        style={styles.input}
        value={password}
        placeholder="Senha"
        onChangeText={onChangePassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "#acaaad",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
