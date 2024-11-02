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
import Checkbox from "expo-checkbox";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

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

          <Text>Editar</Text>
        </View>

        <View style={styles.row}>
          <Checkbox
            value={checked}
            onValueChange={onChangeChecked}
            color={checked ? SHOPEE_ORANGE : undefined}
          />
          <View>
            <Image
              source={{
                uri: "https://media.tenor.com/-Y2YOay3_JoAAAAM/its-friday-dancing.gif",
              }}
            />
          </View>
        </View>

        <PriceTag price={266} />

        <CheckoutButton customTitle="Finalizar!" onPress={handleCheckout} />
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
});
