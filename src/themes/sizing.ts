import { Dimensions, StyleSheet } from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

export const icons = StyleSheet.create({
  IconSM: {
    width: 18,
    height: 18,
  },
  IconMD: {
    width: 24,
    height: 24,
  },
  IconLG: {
    width: 32,
    height: 32,
  },
  IconXL: {
    width: 38,
    height: 38,
  },
  Star: {
    width: 148,
    height: 148,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
});
