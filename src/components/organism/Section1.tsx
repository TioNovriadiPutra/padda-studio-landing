import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { Section1Left, Section1Right } from "@components/molecule";

type Props = {
  isMobile: boolean;
};

const Section1 = ({ isMobile }: Props) => {
  return (
    <View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <Section1Left isMobile={isMobile} />

      <Section1Right isMobile={isMobile} />
    </View>
  );
};

export default Section1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-50"],
  },
  containerWeb: {
    gap: 40,
    height: 876,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 120,
    paddingTop: 54,
    paddingBottom: 155,
  },
  containerMobile: {
    gap: 69.02,
    height: 1069.45,
    paddingHorizontal: 14,
    paddingVertical: 40,
  },
});
