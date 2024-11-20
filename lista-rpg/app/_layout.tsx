import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Stack />
    </ActionSheetProvider>
  );
}
