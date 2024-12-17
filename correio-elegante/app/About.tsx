import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import React from "react";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import FullScreen from "@/components/containers/Fullscren";
import AntDesign from "@expo/vector-icons/AntDesign";
import FlexRow from "@/components/FlexRow";

export default function About() {
  return (
    <FullScreen>
      <HeaderWithTitle title="Sobre" />
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={styles.title}>Duty Free PDM</Text>
        <Text>Version 1.0.0</Text>
      </View>
      <View style={styles.container}>
        <Text>Developed by</Text>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars.githubusercontent.com/u/119073213?v=4",
          }}
        />
        <Text style={styles.title}>Nestor Hugo</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/nestorhugo")}
          style={styles.github}
        >
          <FlexRow>
            <AntDesign name="github" size={24} color="white" />
            <Text style={styles.githubText}>nestorhugo</Text>
          </FlexRow>
        </TouchableOpacity>
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    margin: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  link: {
    color: "blue",
    borderBottomColor: "blue",
    borderBottomWidth: 1,
  },
  github: {
    padding: 16,
    backgroundColor: "black",
    borderRadius: 8,
    width: 200,
  },
  githubText: {
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 300,
    height: undefined,
    aspectRatio: 380 / 115,
    marginBottom: 50,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 99,
  },
});
