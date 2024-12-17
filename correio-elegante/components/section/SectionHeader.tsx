import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FlexRow from "../FlexRow";
import { PRIMARY_COLOR } from "@/constants/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type SectionHeaderProps = {
  country: string;
  total: number;
  expand: () => void;
};

export default function SectionHeader({
  country,
  total,
  expand,
}: SectionHeaderProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={expand}>
      <FlexRow between>
        <Text style={styles.title}>{country}</Text>
        <FlexRow>
          <FontAwesome name="plane" size={16} color={PRIMARY_COLOR} />
          <Text>{total}</Text>
        </FlexRow>
      </FlexRow>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fafafa",
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
