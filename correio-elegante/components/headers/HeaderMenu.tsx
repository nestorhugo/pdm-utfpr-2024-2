import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "@/constants/theme";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router } from "expo-router";

export default function HeaderMenu() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Sobre", "Logout", "Cancelar"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            router.push("/About");
            break;

          case destructiveButtonIndex:
            router.dismissAll();
            break;

          case cancelButtonIndex:
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.menuButton}>
      <MaterialIcons name="menu" size={24} color={PRIMARY_COLOR} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 10,
  },
});
