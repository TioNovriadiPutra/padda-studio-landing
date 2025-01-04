import { Image, Pressable, StyleSheet } from "react-native";
import React from "react";

type Props = {
  onPress: () => void;
};

const LogoButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={require("@assets/images/mainLogo.png")}
        style={styles.logo}
      />
    </Pressable>
  );
};

export default LogoButton;

const styles = StyleSheet.create({
  logo: {
    width: 131,
    height: 36,
  },
});
