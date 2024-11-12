import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";
import FullScreen from "@/components/containers/FullScreen";
import Scrollable from "@/components/containers/Scrollable";
import FlexRow from "@/components/FlexRow";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function index() {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isEnabled, toggleSwitch] = React.useState(false);
  const handleCheckout = () => {
    router.push("/checkout");
  };

  function hangleLogin() {
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
  }

  return (
    <FullScreen center>
      <HeaderHidden />
      <Image source={require("@/assets/images/pdmgram.png")} />
      <Text>Sign Up</Text>

      <TextInput
        style={style.input}
        value={username}
        onChangeText={onChangeUsername}
        placeholder="Usuário"
      />

      <TextInput
        style={style.input}
        value={password}
        onChangeText={onChangePassword}
        placeholder="Senha"
        secureTextEntry
      />

      <FlexRow>
        <Text>Subscribe to Newsletter</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </FlexRow>

      <Button
        disabled={isEnabled ? false : true}
        title="Let's Go!"
        onPress={hangleLogin}
      />

      {/* <CheckoutButton onPress={handleCheckout} /> */}
    </FullScreen>
  );
}

const style = StyleSheet.create({
  image: {},
  input: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "#acaaad",
    padding: 10,
    borderRadius: 10,
  },
});
