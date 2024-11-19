import { DEFAULT_GAP, DEFAULT_PADDING } from "@/constants/globalStyles";
import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: "#f6f6f6",
    marginVertical: 8,
  },
});
