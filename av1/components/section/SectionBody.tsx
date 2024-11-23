import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Passenger } from "@/helpers/helpers";
import FlexRow from "../FlexRow";

type SectionBodyProps = {
  passenger: Passenger;
  show: boolean;
};

export default function SectionBody({ passenger: p, show }: SectionBodyProps) {
  if (!show) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlexRow between>
        <FlexRow>
          <Image source={{ uri: p.passenger_avatar }} style={styles.avatar} />
          <Text>{p.passenger_name}</Text>
        </FlexRow>
        <FlexRow>
          <Text>{p.origin}</Text>
          <Text>-</Text>
          <Text>{p.destination}</Text>
        </FlexRow>
      </FlexRow>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
});
