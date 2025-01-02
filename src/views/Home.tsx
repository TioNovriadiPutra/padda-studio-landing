import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Section1, Section2 } from "@components/organism";
import { colors } from "@themes/colors";
import useMedia from "@hooks/useMedia";

const Home = () => {
  const { isMobile } = useMedia();

  return (
    <ScrollView style={[styles.container, isMobile && styles.containerMobile]}>
      <Section1 isMobile={isMobile} />

      <Section2 />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-50"],
  },
  containerMobile: {
    gap: 40,
  },
});
