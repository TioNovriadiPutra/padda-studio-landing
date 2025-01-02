import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import React, { MutableRefObject } from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Navbar } from "@interfaces/page";

type Props = {
  itemData: Navbar;
  scrollRef: MutableRefObject<ScrollView | null>;
  onHandleClose: () => void;
};

const NavbarMenuItem = ({ itemData, scrollRef, onHandleClose }: Props) => {
  const onHandlePress = () => {
    if (scrollRef) {
      scrollRef.current?.scrollTo({ y: itemData.toMobile, animated: true });
    }

    onHandleClose();
  };

  return (
    <Pressable style={styles.container} onPress={onHandlePress}>
      <Text style={[fontStyle["BodySReg"], styles.label]}>
        {itemData.title}
      </Text>
    </Pressable>
  );
};

export default NavbarMenuItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    color: colors["Neutral-800"],
  },
});
