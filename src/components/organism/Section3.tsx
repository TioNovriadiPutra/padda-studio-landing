import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  trigger: boolean;
  isMobile: boolean;
};

const Section3 = ({ trigger, isMobile }: Props) => {
  const descAnim = useSharedValue(0);

  const descAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(descAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: descAnim.value,
    };
  });

  useEffect(() => {
    if (trigger && descAnim.value === 0) {
      descAnim.value = withTiming(1, { duration: 1000 });
    }
  }, [trigger]);

  return (
    <View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
      ]}
    >
      <Animated.Text
        style={[
          isMobile ? fontStyle["SubtitleReg"] : fontStyle["BodyXL"],
          styles.desc,
          descAnimatedStyle,
        ]}
      >
        Step into our studio and step out with artful images that celebrate your
        unique moments and milestones.
      </Animated.Text>
    </View>
  );
};

export default Section3;

const styles = StyleSheet.create({
  container: {
    height: 296,
    backgroundColor: colors["Neutral-50"],
    alignItems: "center",
  },
  containerWeb: {
    paddingVertical: 100,
    paddingHorizontal: 80,
  },
  containerMobile: {
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  desc: {
    color: colors["Neutral-900"],
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
