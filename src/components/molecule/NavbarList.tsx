import { ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject } from "react";
import { navbarData } from "@utils/constant/page";
import { NavbarItem } from "@components/atom";

type Props = {
  scrollRef: MutableRefObject<ScrollView | null>;
};

const NavbarList = ({ scrollRef }: Props) => {
  return (
    <View style={styles.container}>
      {navbarData.map((item, index) => (
        <NavbarItem
          key={index.toString()}
          itemData={item}
          scrollRef={scrollRef}
        />
      ))}
    </View>
  );
};

export default NavbarList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 64,
  },
});
