import { ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject } from "react";
import { colors } from "@themes/colors";
import { LogoButton, NavbarList } from "@components/molecule";
import { CustomButton, HamburgerButton } from "@components/atom";
import Animated from "react-native-reanimated";
import useNavbar from "@hooks/useNavbar";
import useMedia from "@hooks/useMedia";
import { onHandleBook } from "@utils/helper/helperFunc";

type Props = {
  scrollRef: MutableRefObject<ScrollView | null>;
};

const Navbar = ({ scrollRef }: Props) => {
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

      {!isMobile && <NavbarList scrollRef={scrollRef} />}

      {isMobile ? (
        <HamburgerButton />
      ) : (
        <CustomButton label="BOOKING NOW" onClick={onHandleBook} />
      )}
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
