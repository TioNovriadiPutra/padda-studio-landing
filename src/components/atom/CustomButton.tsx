import { Image, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AnimatedPressable } from "@utils/constant/animated";

type Props = {
  label: string;
  onClick?: () => void;
};

const CustomButton = ({ label, onClick }: Props) => {
  const [cursorPos, setCursorPos] = useState<"in" | "out">("out");

  const buttonAnim = useSharedValue(0);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      buttonAnim.value,
      [0, 1],
      [colors["Neutral-950"], colors["Accent-600"]]
    );

    return {
      borderColor,
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(buttonAnim.value, [0, 1], [0, 100]);

    return {
      width: `${width}%`,
    };
  });

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      buttonAnim.value,
      [0, 1],
      [colors["Neutral-800"], colors["Neutral-50"]]
    );

    return {
      color,
    };
  });

  const onHoverIn = () => {
    setCursorPos("in");
    buttonAnim.value = withTiming(1, { duration: 200 });
  };

  const onHoverOut = () => {
    setCursorPos("out");
    buttonAnim.value = withTiming(0, { duration: 200 });
  };

  return (
    <AnimatedPressable
      style={[styles.container, containerAnimatedStyle]}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPress={onClick}
    >
      <Animated.Text
        style={[fontStyle["Button"], styles.label, titleAnimatedStyle]}
      >
        {label}
      </Animated.Text>

      <Image
        source={
          cursorPos === "in"
            ? require("@assets/images/arrowWhite.png")
            : require("@assets/images/arrow.png")
        }
        style={[icons["IconMD"], styles.icon]}
      />

      <Animated.View style={[styles.backdrop, buttonAnimatedStyle]} />
    </AnimatedPressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 9,
    borderRadius: 6,
    gap: 8,
    borderWidth: 1,
  },
  label: {
    zIndex: 999,
  },
  icon: {
    zIndex: 999,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4,
    backgroundColor: colors["Accent-600"],
    zIndex: 998,
  },
});
