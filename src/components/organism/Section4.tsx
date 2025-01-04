import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { Carousel } from "@components/molecule";

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
      <Carousel isMobile={isMobile} />
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
