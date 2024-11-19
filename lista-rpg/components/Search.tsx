import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import FlexRow from "./FlexRow";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SHOPEE_ORANGE } from "@/constants/globalStyles";

export default function Search() {
  return (
    <View style={style.search}>
      <FlexRow>
        <Ionicons name="search" size={20} color="grey" />
        <TextInput style={style.textEdit} />
      </FlexRow>
      <Ionicons name="camera-outline" size={24} color="grey" />
    </View>
  );
}

const style = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#dbdbdb",
    padding: 8,
    borderRadius: 8,
  },
  textEdit: {
    color: SHOPEE_ORANGE,
  },
});
