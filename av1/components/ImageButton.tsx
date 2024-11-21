import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ImageProps,
  StyleSheet,
} from "react-native";
import React from "react";

type ImageButtonProps = ImageProps & {
  buttonText: string;
  handleButton: () => void;
  imageStyle?: object;
};

export default function ImageButton({
  handleButton,
  imageStyle,
  buttonText,
  ...rest
}: ImageButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButton} style={styles.imageContainer}>
        <ImageBackground {...rest} style={[styles.image, imageStyle]}>
          <Text style={styles.text}>{buttonText}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
