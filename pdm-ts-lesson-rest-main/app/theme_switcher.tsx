import { View, Text, StyleSheet, Button, TextStyle } from "react-native";
import React from "react";
import { useTheme } from "../src/contexts/themeContext";

export default function ThemeSwitcher() {
  const { theme, isDark, toggleTheme } = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Button
        onPress={toggleTheme}
        title={`Tema atual ${isDark ? "Dark" : "Light"}`}
      />
    </View>
  );
}
