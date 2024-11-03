import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SHOPEE_ORANGE } from "@/constants/globalStyles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FlexRow from "./FlexRow";

type ChipProps = {
  icon?: string;
  iconSize?: number;
  bgColor?: string;
  color?: string;
  text: string;
};

export default function Chip({
  icon,
  iconSize,
  bgColor,
  color,
  text,
}: ChipProps) {
  return (
    <View
      style={[
        styles.chip,
        bgColor
          ? { backgroundColor: bgColor }
          : { backgroundColor: SHOPEE_ORANGE },
      ]}
    >
      <FlexRow>
        {icon && (
          <FontAwesome6
            name={icon}
            size={iconSize ? iconSize : 20}
            color={color ? color : "white"}
          />
        )}
        <Text style={color ? { color: color } : { color: "white" }}>
          {text}
        </Text>
      </FlexRow>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    padding: 4,
    borderRadius: 4,
  },
});
