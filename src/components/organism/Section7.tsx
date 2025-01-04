import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";
import { Section7Action } from "@components/molecule";
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

const Section7 = ({ trigger, isMobile }: Props) => {
  const sectionAnim = useSharedValue(0);

  const textAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(sectionAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: sectionAnim.value,
    };
  });

  const actionAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(sectionAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateY }],
      opacity: sectionAnim.value,
    };
  });

  useEffect(() => {
    if (trigger && sectionAnim.value === 0) {
      sectionAnim.value = withTiming(1, { duration: 1000 });
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
          textAnimatedStyle,
        ]}
      >
        Step into our studio and step out with artful images that celebrate your
        unique moments and milestones.
      </Animated.Text>

      <Section7Action animatedStyle={actionAnimatedStyle} isMobile={isMobile} />
    </View>
  );
};

export default Section7;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-950"],
    alignItems: "center",
    paddingVertical: 100,
    gap: 40,
  },
  containerWeb: {
    height: 380,
    paddingHorizontal: 80,
  },
  containerMobile: {
    height: 534,
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  desc: {
    color: colors["Neutral-50"],
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
