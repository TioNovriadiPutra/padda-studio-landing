import { LayoutChangeEvent, ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject } from "react";
import { navbarData } from "@utils/constant/page";
import {
  CustomButton,
  NavbarMenuFooter,
  NavbarMenuItem,
} from "@components/atom";
import { colors } from "@themes/colors";
import Animated from "react-native-reanimated";
import { onHandleBook } from "@utils/helper/helperFunc";

type Props = {
  animatedStyle: { height: number };
  onHandleLayout: (e: LayoutChangeEvent) => void;
  scrollRef: MutableRefObject<ScrollView | null>;
  onHandleClose: () => void;
};

const NavbarMenu = ({
  animatedStyle,
  onHandleLayout,
  scrollRef,
  onHandleClose,
}: Props) => {
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.content} onLayout={onHandleLayout}>
        <View style={styles.function}>
          <View style={styles.list}>
            {navbarData.map((item, index) => (
              <NavbarMenuItem
                key={index.toString()}
                itemData={item}
                scrollRef={scrollRef}
                onHandleClose={onHandleClose}
              />
            ))}
          </View>

          <CustomButton label="BOOKING NOW" onClick={onHandleBook} />
        </View>

        <NavbarMenuFooter />
      </View>
    </Animated.View>
  );
};

export default NavbarMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-50"],
    overflow: "hidden",
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 14,
  },
  function: {
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors["Border"],
    gap: 24,
  },
  list: {
    gap: 32,
  },
});
