import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import React, { MutableRefObject } from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Navbar } from "@interfaces/page";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";

type Props = {
  itemData: Navbar;
  scrollRef: MutableRefObject<ScrollView | null>;
  onHandleClose: () => void;
  navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const NavbarMenuItem = ({
  itemData,
  scrollRef,
  onHandleClose,
  navigationRef,
}: Props) => {
  const onHandlePress = () => {
    if (itemData.toPath) {
      navigationRef.navigate(itemData.toPath);
    } else {
      if (scrollRef) {
        scrollRef.current?.scrollTo({ y: itemData.toMobile, animated: true });
      }
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
