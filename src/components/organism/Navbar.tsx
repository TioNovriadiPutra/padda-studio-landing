import { StyleSheet } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { LogoButton, NavbarList } from "@components/molecule";
import { CustomButton, HamburgerButton } from "@components/atom";
import Animated from "react-native-reanimated";
import useNavbar from "@hooks/useNavbar";
import useMedia from "@hooks/useMedia";

const Navbar = () => {
  const { navbarAnimatedStyle } = useNavbar();
  const { isMobile } = useMedia();

  return (
    <Animated.View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
        navbarAnimatedStyle,
      ]}
    >
      <LogoButton />

      {!isMobile && <NavbarList />}

      {isMobile ? <HamburgerButton /> : <CustomButton label="BOOKING NOW" />}
    </Animated.View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowColor: colors.Black,
    shadowRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
    backgroundColor: colors["Neutral-50"],
  },
  containerWeb: {
    height: 64,
    paddingHorizontal: 80,
  },
  containerMobile: {
    height: 58,
    paddingHorizontal: 14,
  },
});
