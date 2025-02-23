import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useTokenContext } from "../../src/contexts/userContext";
import api from "../../src/services/api";
import { Car } from "../../src/types/Car";
import ThemeSwitcher from "../theme_switcher";
import { useTheme } from "../../src/contexts/themeContext";

export default function Home() {
  const { token } = useTokenContext();
  const [cars, setCars] = useState<Car[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    // exemplo com then-catch (na outra página usaremos async-await)
    api
      .get("/api/collections/cars/records", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setCars(response.data.items);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      color: theme.colors.text,
    },
    flatlist: {
      padding: 16,
      width: "100%",
      flex: 1,
      color: theme.colors.text,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 16,
      color: theme.colors.text,
    },
    item: {
      flexDirection: "column",
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 16,
      backgroundColor: theme.colors.card,
      borderRadius: 12,
    },
    item_text: {
      color: theme.colors.text,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cars API LIST</Text>

      <Link style={styles.item_text} href="/userspace/create_car">
        Create a new Car
      </Link>

      <ThemeSwitcher />

      <FlatList
        data={cars}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.item_text}>Marca: {item.brand}</Text>
              <Text style={styles.item_text}>Modelo: {item.model}</Text>
              <Text style={styles.item_text}>HP: {item.hp}</Text>
            </View>
          );
        }}
        keyExtractor={(car) => car.id}
        style={styles.flatlist}
      />
    </View>
  );
}
