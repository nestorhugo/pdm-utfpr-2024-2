import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";
import FullScreen from "@/components/containers/FullScreen";
import Scrollable from "@/components/containers/Scrollable";
import FlexRow from "@/components/FlexRow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import List from "@/components/List";
import { router } from "expo-router";
import React from "react";
import {
  Button,
  Image,
  SectionList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function index() {
  return (
    <FullScreen>
      <HeaderHidden />
      <Header />
      <List />
      <Footer />
    </FullScreen>
  );
}

const style = StyleSheet.create({
  image: {},
  input: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: "#acaaad",
    padding: 10,
    borderRadius: 10,
  },
});
