import { Image, Pressable } from "react-native";
import React from "react";
import { icons } from "@themes/sizing";
import { useSetRecoilState } from "recoil";
import { showMenuState } from "@stores/page";

const HamburgerButton = () => {
  const setShowMenu = useSetRecoilState(showMenuState);

  const onHandlePress = () => {
    setShowMenu(true);
  };

  return (
    <Pressable onPress={onHandlePress}>
      <Image
        source={require("@assets/images/hamburger.png")}
        style={icons["IconMD"]}
      />
    </Pressable>
  );
};

export default HamburgerButton;
