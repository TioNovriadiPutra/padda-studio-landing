import { StyleSheet, View } from "react-native";
import React from "react";
import {
  SectionFooterInfo,
  SectionFooterLogo,
  SectionFooterNav,
} from "@components/atom";

type Props = {
  isMobile: boolean;
};

const SectionFooterPadda = ({ isMobile }: Props) => {
  return (
    <View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <SectionFooterLogo isMobile={isMobile} />

      <SectionFooterNav isMobile={isMobile} />

      <SectionFooterInfo isMobile={isMobile} />
    </View>
  );
};

export default SectionFooterPadda;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  containerWeb: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerMobile: {
    gap: 32,
  },
});
