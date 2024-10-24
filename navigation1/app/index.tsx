import { router, Stack } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  function handleButtonClick() {
    router.push({
      pathname: "/pag",
      params: { id: Math.floor(Math.random() * 1000) },
    });
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Nestor",
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Abracadabra</Text>
        <Button title="Descubra.." onPress={handleButtonClick} />
      </View>
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
