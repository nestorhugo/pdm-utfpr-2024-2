import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useTheme } from "../../src/contexts/themeContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import api from "../../src/services/api";
import { useTokenContext } from "../../src/contexts/userContext";

interface CarProps {
  id: string;
  brand: string;
  model: string;
  hp: number;
  onDelete: (id: string) => void;
}

export default function CarCard({ id, brand, model, hp, onDelete }: CarProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    item: {
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 16,
      backgroundColor: theme.colors.card,
      borderRadius: 12,
    },
    item_text: {
      color: theme.colors.text,
    },
    delete_btn: {
      color: theme.colors.error,
    },
    flex: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  return (
    <View style={[styles.item, styles.flex]}>
      <View>
        <Text style={styles.item_text}>Marca: {brand}</Text>
        <Text style={styles.item_text}>Modelo: {model}</Text>
        <Text style={styles.item_text}>HP: {hp}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => onDelete(id)}
          testID={`delete-button-${id}`}
        >
          <Text>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
