import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Link, router, Stack, useLocalSearchParams } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";

export default function pag() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Cabra",
        }}
      />
      <Text style={styles.title}>Pata de cabra..</Text>
      <Text style={styles.subtitle}>{id} </Text>
      <Link href="/">Retornar pra home</Link>
      <Text>pag</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
