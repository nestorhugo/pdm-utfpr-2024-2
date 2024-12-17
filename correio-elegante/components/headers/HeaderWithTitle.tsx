import React from "react";
import { Stack } from "expo-router";
import HeaderMenu from "./HeaderMenu";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  return (
    <Stack.Screen options={{ title, headerRight: () => <HeaderMenu /> }} />
  );
}
