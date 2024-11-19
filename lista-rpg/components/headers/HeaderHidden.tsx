import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

export default function HeaderHidden() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
    </SafeAreaView>
  );
}
