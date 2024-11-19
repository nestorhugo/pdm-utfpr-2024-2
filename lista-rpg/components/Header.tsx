import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FlexRow from "./FlexRow";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import Search from "./Search";
import { SHOPEE_ORANGE } from "@/constants/globalStyles";

export default function Header() {
  return (
    <FlexRow between>
      <Search />
      <FontAwesome6 name="cart-shopping" size={20} color={SHOPEE_ORANGE} />
      <Ionicons
        name="chatbubble-ellipses-outline"
        size={24}
        color={SHOPEE_ORANGE}
      />
    </FlexRow>
  );
}

const style = StyleSheet.create({
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
