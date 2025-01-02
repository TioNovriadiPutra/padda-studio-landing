import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import CustomButton from "./CustomButton";
import AppButton from "./AppButton";

type Props = {
  isMobile: boolean;
};

const Section1Action = ({ isMobile }: Props) => {
  const buttonAnim = useSharedValue(0);

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(buttonAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: buttonAnim.value,
    };
  });

  useEffect(() => {
    buttonAnim.value = withDelay(400, withTiming(1, { duration: 1000 }));
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
        buttonAnimatedStyle,
      ]}
    >
      <CustomButton label="BOOKING NOW" />

      <AppButton type="black" label="VIEW STUDIO" />
    </Animated.View>
  );
};

export default Section1Action;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  containerWeb: {
    flexDirection: "row",
    gap: 24,
  },
  containerMobile: {
    gap: 14,
  },
});
