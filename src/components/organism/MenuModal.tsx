import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import NavbarMenu from "@components/molecule/NavbarMenu";
import useNavbarMenu from "@hooks/useNavbarMenu";

const MenuModal = () => {
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
