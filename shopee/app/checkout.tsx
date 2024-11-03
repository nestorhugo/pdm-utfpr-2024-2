import { View, Text, Alert, StyleSheet, Image } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import Card from "@/components/containers/Card";
import PriceTag from "@/components/checkout/PriceTag";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  SHOPEE_ORANGE,
} from "@/constants/globalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Checkbox from "expo-checkbox";
import NumberPicker from "@/components/NumberPicker";
import productsMock from "@/components/checkout/productsMock";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

  const product = productsMock[0];

  const [checked, onChangeChecked] = React.useState(true);

  return (
    <FullScreen center>
      <HeaderWithTitle title="Nestor" />

      <Card>
        <View style={styles.header}>
          <View style={styles.row}>
            <Checkbox
              value={checked}
              onValueChange={onChangeChecked}
              color={checked ? SHOPEE_ORANGE : undefined}
            />
            <View style={styles.indicado}>
              <Text style={styles.text_white}>Indicado</Text>
            </View>
            <Text style={styles.h2}>Choice Oficial</Text>
            <View style={[styles.row, styles.live]}>
              <Entypo name="video-camera" size={12} color="white" />
              <Text style={styles.text_white}>LIVE</Text>
            </View>
            <Entypo name="chevron-right" size={24} color="lightgray" />
          </View>

          <Text style={{ color: "gray" }}>Editar</Text>
        </View>

        <View style={styles.row}>
          <Checkbox
            value={checked}
            onValueChange={onChangeChecked}
            color={checked ? SHOPEE_ORANGE : undefined}
          />
          <View>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
          </View>
          <View style={{ width: 240 }}>
            <Text numberOfLines={2}>
              Adaptador SATA Para USBaaaaaaaaaaaaaaaaaaaaaaaa
            </Text>
            <View style={styles.header}>
              <PriceTag price={266} oldPrice={359} />
              <NumberPicker />
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.header}>
          <View style={styles.row}>
            <Entypo name="ticket" size={24} color={SHOPEE_ORANGE} />
            <Text>Ver todos os cupons da loja</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="lightgray" />
        </View>
        <View style={styles.header}>
          <View style={styles.row}>
            <FontAwesome6 name="truck" size={20} color="#439a91" />
            <Text>Frete gratis para pedidos acima de 19,00</Text>
          </View>
          <Entypo name="chevron-right" size={24} color="lightgray" />
        </View>
      </Card>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: DEFAULT_GAP,
  },
  h2: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  indicado: {
    padding: 4,
    color: "white",
    backgroundColor: SHOPEE_ORANGE,
    borderRadius: 4,
  },
  live: {
    backgroundColor: SHOPEE_ORANGE,
    padding: 4,
    borderRadius: 4,
  },
  text_white: {
    fontSize: 12,
    color: "white",
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  divider: {
    borderWidth: 1,
    borderColor: "#f6f6f6",
    marginVertical: 8,
  },
});
