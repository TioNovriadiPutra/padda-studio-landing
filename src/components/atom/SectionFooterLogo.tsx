import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  isMobile: boolean;
};

const SectionFooterLogo = ({ isMobile }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@assets/images/logoWhite.png")}
        style={styles.logo}
      />

      <Text
        style={[
          isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
          styles.desc,
        ]}
      >
        Let us turn life’s fleeting moments into stunning, lasting treasures.
      </Text>
    </View>
  );
};

export default SectionFooterLogo;

const styles = StyleSheet.create({
  container: {
    gap: 42,
    maxWidth: 299,
  },
  logo: {
    width: 180,
    height: 83.95,
  },
  desc: {
    color: colors["Neutral-50"],
    textDecorationLine: "underline",
  },
});
