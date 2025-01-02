import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const Section2 = () => {
  return (
    <View style={styles.container}>
      <Text>Section2</Text>
    </View>
  );
};

export default Section2;

const styles = StyleSheet.create({
  container: {
    height: 1132,
    backgroundColor: colors["Neutral-950"],
    paddingHorizontal: 120,
    paddingVertical: 84,
  },
});
