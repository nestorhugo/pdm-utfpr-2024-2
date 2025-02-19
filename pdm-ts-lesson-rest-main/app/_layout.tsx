import { Slot } from "expo-router";
import React from "react";
import TokenContextProvider from "../src/contexts/userContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { ThemeProvider, useTheme } from "../src/contexts/themeContext";

// Crie um componente separado para usar o hook useTheme
function AppContent() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <TokenContextProvider>
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </TokenContextProvider>
  );
}

// Componente principal que fornece o contexto
export default function _layout() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
