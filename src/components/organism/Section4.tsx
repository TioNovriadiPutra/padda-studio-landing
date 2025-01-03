import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

type Props = {
  isMobile: boolean;
};

const Section4 = ({ isMobile }: Props) => {
  return (
    <View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <Text>Section4</Text>
    </View>
  );
};

export default Section4;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-950"],
  },
  containerWeb: {
    height: 774,
  },
  containerMobile: {
    height: 194,
  },
});
