import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { DEFAULT_GAP, SHOPEE_ORANGE } from "@/constants/globalStyles";

type PriceTagProps = {
  price: number;
  oldPrice?: number;
};

export default function PriceTag({ price, oldPrice }: PriceTagProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.price}>R${price.toFixed(2)}</Text>
      {oldPrice && <Text style={styles.oldPrice}>R${oldPrice.toFixed(2)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: SHOPEE_ORANGE,
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#c4c4c4",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: DEFAULT_GAP,
  },
});
