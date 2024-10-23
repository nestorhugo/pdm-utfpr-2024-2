import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";
import React, { useEffect } from "react";

export default function ResetPassword() {
  const [newPassword, onChangeNewPassword] = React.useState("");
  const [repeatNewPassword, onChangeResetNewPassword] = React.useState("");
  // const [isPasswordValid, onChangeIsPasswordValid] = React.useState(false);

  function validatePasswordType(password: string) {
    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    // return passwordRegex.test(password);
    return password.length >= 6;
  }

  function validateEqualPasswords(passwd: string, rPasswd: string) {
    return passwd !== rPasswd;
  }

  useEffect(() => {
    validatePasswordType(newPassword);
  }, [newPassword]);

  useEffect(() => {
    validateEqualPasswords(newPassword, repeatNewPassword);
  }, [repeatNewPassword]);

  return (
    <View style={styles.container}>
      <Text>Resetar senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        value={newPassword}
        onChangeText={onChangeNewPassword}
        secureTextEntry
      />

      {validatePasswordType(newPassword) ? (
        <Text>Senha válida</Text>
      ) : (
        <Text>Senha inválida</Text>
      )}

      <TextInput
        style={styles.input}
        value={repeatNewPassword}
        placeholder="Repetir nova senha"
        onChangeText={onChangeResetNewPassword}
        secureTextEntry
      />

      <Button
        title="Resetar senha"
        disabled={true}
        // onPress={}
      />
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
