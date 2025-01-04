import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const Section7 = () => {
  return (
    <View style={styles.container}>
      <Text>Section7</Text>
    </View>
  );
};

export default Section7;

const styles = StyleSheet.create({
  container: {
    height: 380,
    backgroundColor: colors["Neutral-950"],
  },
});
