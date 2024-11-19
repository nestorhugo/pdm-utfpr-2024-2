import { DEFAULT_GAP, DEFAULT_PADDING } from "@/constants/globalStyles";
import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

type FlexRowProps = {
  children: ReactNode;
  between?: boolean;
};

export default function FlexRow({ children, between }: FlexRowProps) {
  return (
    <View style={[styles.row, between ? styles.between : styles.center]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: DEFAULT_GAP,
  },
  center: {
    justifyContent: "center",
  },
  between: {
    justifyContent: "space-between",
  },
});