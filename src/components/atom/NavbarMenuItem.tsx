import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  title: string;
};

const NavbarMenuItem = ({ title }: Props) => {
  return (
    <Pressable style={styles.container}>
      <Text style={[fontStyle["BodySReg"], styles.label]}>{title}</Text>
    </Pressable>
  );
};

export default NavbarMenuItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    color: colors["Neutral-800"],
  },
});
