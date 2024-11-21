import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "@/constants/theme";

export default function HeaderMenu() {
  const handleMenuPress = () => {
    Alert.alert("Menu Pressed", "This is where the menu would open.");
  };
  return (
    <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
      <MaterialIcons name="menu" size={24} color={PRIMARY_COLOR} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 10,
  },
});
