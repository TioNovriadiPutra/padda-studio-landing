import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  isMobile: boolean;
};

const SectionFooterNav = ({ isMobile }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[fontStyle["BodyMBold"], styles.title]}>Navigation</Text>

      <View style={styles.content}>
        <Pressable>
          <Text
            style={[
              isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
              styles.label,
            ]}
          >
            Home
          </Text>
        </Pressable>

        <Pressable>
          <Text
            style={[
              isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
              styles.label,
            ]}
          >
            About Us
          </Text>
        </Pressable>

        <Pressable>
          <Text
            style={[
              isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
              styles.label,
            ]}
          >
            Pricing
          </Text>
        </Pressable>

        <Pressable>
          <Text
            style={[
              isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
              styles.label,
            ]}
          >
            FAQ
          </Text>
        </Pressable>
      </View>

      <Pressable>
        <Text
          style={[
            isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
            styles.label,
          ]}
        >
          Booking
        </Text>
      </Pressable>
    </View>
  );
};

export default SectionFooterNav;

const styles = StyleSheet.create({
  container: {
    maxWidth: 305,
  },
  title: {
    color: colors["Neutral-500"],
    marginBottom: 32,
  },
  content: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 24,
  },
  label: {
    color: colors["Neutral-50"],
  },
});
