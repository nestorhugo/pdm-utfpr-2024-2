import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";
import Scrollable from "@/components/containers/Scrollable";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

/**
 * index: carrinho produtos
 * checkout: total, meio de pagamento
 * compra concluída
 */
3;
export default function index() {
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Scrollable>
      <HeaderWithTitle title="Shopping Cart" />

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!
        </Text>
        <Text>R$50,00</Text>
      </Card>

      <CheckoutButton onPress={handleCheckout} />
    </Scrollable>
  );
}
