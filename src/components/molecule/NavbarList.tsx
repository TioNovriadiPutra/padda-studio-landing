import { ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject } from "react";
import { navbarData } from "@utils/constant/page";
import { NavbarItem } from "@components/atom";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";

type Props = {
  scrollRef: MutableRefObject<ScrollView | null>;
  navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const NavbarList = ({ scrollRef, navigationRef }: Props) => {
  return (
    <View style={styles.container}>
      {navbarData.map((item, index) => (
        <NavbarItem
          key={index.toString()}
          itemData={item}
          scrollRef={scrollRef}
          navigationRef={navigationRef}
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
