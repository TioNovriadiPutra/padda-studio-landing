import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";

type Props = {
  type: "black" | "white" | "grey" | "emptyWhite" | "emptyBlack";
  label: string;
  onClick?: () => void;
};

const AppButton = ({ type, label, onClick }: Props) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            type === "black"
              ? colors["Neutral-950"]
              : type === "white"
              ? colors["Neutral-50"]
              : type === "grey"
              ? colors["Neutral-400"]
              : "none",
          borderWidth: type === "emptyWhite" || type === "emptyBlack" ? 1 : 0,
          borderColor:
            type === "emptyWhite"
              ? colors["Neutral-50"]
              : colors["Neutral-950"],
        },
      ]}
      onPress={onClick}
    >
      <Text
        style={[
          fontStyle["Button"],
          {
            color:
              type === "white" || type === "emptyBlack"
                ? colors["Neutral-950"]
                : colors["Neutral-50"],
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 6,
  },
});
