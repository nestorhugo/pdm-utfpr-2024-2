import React from "react";
import { Stack } from "expo-router";

type HeaderWithTitleProps = {
  title: string;
};

export default function HeaderWithTitle({ title }: HeaderWithTitleProps) {
  return <Stack.Screen options={{ title }} />;
}
