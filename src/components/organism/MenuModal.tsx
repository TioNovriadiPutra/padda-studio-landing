import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { MutableRefObject } from "react";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import useNavbarMenu from "@hooks/useNavbarMenu";
import { NavbarMenu } from "@components/molecule";

type Props = {
  scrollRef: MutableRefObject<ScrollView | null>;
};

const MenuModal = ({ scrollRef }: Props) => {
  const { showMenu, menuAnimatedStyle, onHandleMenuLayout, onHandleClose } =
    useNavbarMenu();

  return (
    <Modal visible={showMenu} transparent>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Pressable style={icons["IconMD"]} onPress={onHandleClose} />
        </View>

        <View style={styles.backdrop}>
          <NavbarMenu
            animatedStyle={menuAnimatedStyle}
            onHandleLayout={onHandleMenuLayout}
            scrollRef={scrollRef}
            onHandleClose={onHandleClose}
          />

          <TouchableWithoutFeedback onPress={onHandleClose}>
            <View style={styles.container} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};

export default MenuModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    height: 58,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 14,
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors["Modal"],
  },
});
