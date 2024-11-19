import { View, Text, Alert, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import PriceTag from "@/components/checkout/PriceTag";
import { SHOPEE_ORANGE } from "@/constants/globalStyles";
import Checkbox from "expo-checkbox";
import NumberPicker from "@/components/NumberPicker";
import FlexRow from "@/components/FlexRow";

type ProductListProps = {
  name: string;
  price: number;
  imageUrl: string;
  oldPrice?: number;
};

export default function ProductList({
  name,
  price,
  oldPrice,
  imageUrl,
}: ProductListProps) {
  const [checked, onChangeChecked] = React.useState(true);

  const toggleChecked = () => {
    onChangeChecked(!checked);
  };

  return (
    <FlexRow>
      <Checkbox
        value={checked}
        onValueChange={onChangeChecked}
        color={checked ? SHOPEE_ORANGE : undefined}
      />
      <Pressable onPress={toggleChecked}>
        <View>
          <Image
            style={styles.productImage}
            source={{
              uri: imageUrl,
            }}
          />
        </View>
      </Pressable>
      <View style={{ width: 240 }}>
        <Text numberOfLines={2}>{name}</Text>
        <FlexRow between>
          <PriceTag price={price} oldPrice={oldPrice} />
          <NumberPicker />
        </FlexRow>
      </View>
    </FlexRow>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
