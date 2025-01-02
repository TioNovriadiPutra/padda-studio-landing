import { Image, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { icons } from "@themes/sizing";

const NavbarMenuFooter = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          source={require("@assets/images/facebook.png")}
          style={icons["IconMD"]}
        />
      </Pressable>

      <Pressable>
        <Image
          source={require("@assets/images/twitter.png")}
          style={icons["IconMD"]}
        />
      </Pressable>

      <Pressable>
        <Image
          source={require("@assets/images/instagram.png")}
          style={icons["IconMD"]}
        />
      </Pressable>
    </View>
  );
};

export default NavbarMenuFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 32,
    gap: 24,
  },
});
