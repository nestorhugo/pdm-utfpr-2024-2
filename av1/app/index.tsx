import { View, Text, Button } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/Fullscren";
import { router } from "expo-router";

export default function index() {
  function handlePress() {
    router.push({ pathname: "/haha" });
  }

  return (
    <FullScreen center>
      <Text>index hahaha</Text>
      <Button title="haha" onPress={handlePress} />
    </FullScreen>
  );
}
