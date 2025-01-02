import { showMenuState } from "@stores/page";
import { useEffect, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState } from "recoil";

const useNavbarMenu = () => {
  const [contentHeight, setContentHeight] = useState(0);

  const [showMenu, setShowMenu] = useRecoilState(showMenuState);

  const menuAnim = useSharedValue(0);

  const menuAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(menuAnim.value, [0, 1], [0, contentHeight]);

    return {
      height,
    };
  });

  const onHandleMenuLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;

    setContentHeight(height);
  };

  const onHandleClose = () => {
    menuAnim.value = withTiming(0, { duration: 1000 });

    setTimeout(() => {
      setShowMenu(false);
    }, 1000);
  };

  useEffect(() => {
    if (showMenu) {
      menuAnim.value = withTiming(1, { duration: 1000 });
    }
  }, [showMenu]);

  return {
    showMenu,
    menuAnimatedStyle,
    onHandleMenuLayout,
    onHandleClose,
  };
};

export default useNavbarMenu;
