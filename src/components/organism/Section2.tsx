import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { Section2BoxList, Section2Header } from "@components/molecule";

type Props = {
  trigger: boolean;
  isMobile: boolean;
};

const Section2 = ({ trigger, isMobile }: Props) => {
  return (
    <View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <Section2Header trigger={trigger} isMobile={isMobile} />

      <Section2BoxList trigger={trigger} isMobile={isMobile} />
    </View>
  );
};

export default Section2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-950"],
    gap: 60,
  },
  containerWeb: {
    height: 1132,
    paddingHorizontal: 120,
    paddingVertical: 84,
  },
  containerMobile: {
    minHeight: 1628,
    paddingHorizontal: 14,
    paddingVertical: 64,
  },
});
