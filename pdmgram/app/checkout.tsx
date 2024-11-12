import { Text, Alert, StyleSheet } from "react-native";
import React from "react";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import Card from "@/components/containers/Card";
import { SHOPEE_ORANGE } from "@/constants/globalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Checkbox from "expo-checkbox";
import productsMock from "@/components/checkout/productsMock";
import FlexRow from "@/components/FlexRow";
import Divider from "@/components/Divider";
import Chip from "@/components/Chip";
import ProductList from "@/components/checkout/ProductList";
import Scrollable from "@/components/containers/Scrollable";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

  const checkout = productsMock;

  const [checked, onChangeChecked] = React.useState(true);

  return (
    <Scrollable>
      <HeaderWithTitle title="Nestor" />
      {checkout.map((shop) => (
        <Card key={shop.id}>
          <FlexRow between>
            <FlexRow>
              <Checkbox
                value={checked}
                onValueChange={onChangeChecked}
                color={checked ? SHOPEE_ORANGE : undefined}
              />
              {shop.isIndicated && <Chip text="Indicado" />}
              <Text style={styles.shopName}>{shop.shop}</Text>
              {shop.isOnLivestream && (
                <Chip text="LIVE" icon="play" iconSize={12} />
              )}
              <Entypo name="chevron-right" size={24} color="lightgray" />
            </FlexRow>

            <Text style={{ color: "gray" }}>Editar</Text>
          </FlexRow>

          {shop.products.map((product) => (
            <ProductList
              key={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice ? product.oldPrice : undefined}
              imageUrl={product.productImage}
            />
          ))}

          {shop.obs && <Divider />}
          {shop.obs &&
            shop.obs.map((obs) => (
              <FlexRow between>
                <FlexRow>
                  <FontAwesome6
                    name={obs.icon}
                    size={20}
                    color={obs.iconColor ? obs.iconColor : SHOPEE_ORANGE}
                  />
                  <Text>{obs.label}</Text>
                </FlexRow>

                <Entypo name="chevron-right" size={24} color="lightgray" />
              </FlexRow>
            ))}
        </Card>
      ))}
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  shopName: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
