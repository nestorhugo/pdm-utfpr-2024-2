import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Card from "./containers/Card";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function List() {
  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
