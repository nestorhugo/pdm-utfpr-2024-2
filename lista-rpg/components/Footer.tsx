import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FlexRow from "./FlexRow";
import { SHOPEE_ORANGE } from "@/constants/globalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";

const buttons: {
  label: string;
  icon: "like2" | "shoppingcart" | "videocamera" | "gift" | "bells" | "user";
}[] = [
  { label: "Descobertas", icon: "like2" },
  {
    label: "Oficiais",
    icon: "shoppingcart",
  },
  {
    label: "Live",
    icon: "videocamera",
  },
  {
    label: "Prêmios",
    icon: "gift",
  },
  {
    label: "Notificações",
    icon: "bells",
  },
  {
    label: "Eu",
    icon: "user",
  },
];

export default function Footer() {
  return (
    <FlexRow between>
      {buttons.map((item) => (
        <View key={item.label} style={style.btn_cont}>
          <TouchableOpacity style={style.button}>
            <AntDesign name={item.icon} size={24} color="black" />
            <Text style={style.text} numberOfLines={1}>
              {item.label}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </FlexRow>
  );
}

const style = StyleSheet.create({
  button: {
    padding: 8,
    alignItems: "center",
  },
  btn_cont: {
    width: "15%",
    marginBottom: 16,
  },
  text: {
    fontSize: 12,
  },
});
