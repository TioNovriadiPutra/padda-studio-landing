import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "@stores/page";
import { navbarData } from "@utils/constant/page";

type Props = {
  trigger: boolean;
  isMobile: boolean;
};

const Section2Desc = ({ trigger, isMobile }: Props) => {
  const scrollPos = useRecoilValue(scrollPosState);

  const sectionAnim = useSharedValue(0);

  const sectionAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(sectionAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateX }],
      opacity: sectionAnim.value,
    };
  });

  useEffect(() => {
    if (isMobile) {
      if (
        scrollPos >= navbarData[0].toMobile! + 100 &&
        sectionAnim.value === 0
      ) {
        sectionAnim.value = withTiming(1, { duration: 1000 });
      }
    } else {
      if (trigger && sectionAnim.value === 0) {
        sectionAnim.value = withTiming(1, { duration: 1000 });
      }
    }
  }, [trigger, scrollPos]);

  return (
    <Animated.View
      style={[
        styles.container,
        !isMobile && styles.containerWeb,
        sectionAnimatedStyle,
      ]}
    >
      <Text
        style={[isMobile ? fontStyle["H3"] : fontStyle["H2"], styles.title]}
      >
        Every click captures the beauty, emotion, and story of your special
        moments.
      </Text>

      <Text
        style={[
          isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
          styles.desc,
        ]}
      >
        With a team of skilled photographers, state-of-the-art equipment, and a
        cozy studio space, we ensure a comfortable and enjoyable experience for
        every client. From candid shots to carefully composed portraits, our
        goal is to turn your cherished memories into timeless works of art that
        you’ll treasure for years to come. Let us help you frame your story
        beautifully!
      </Text>
    </Animated.View>
  );
};

export default Section2Desc;

const styles = StyleSheet.create({
  container: {
    gap: 64,
  },
  containerWeb: {
    flex: 1,
  },
  title: {
    color: colors["Neutral-50"],
  },
  desc: {
    color: colors["Neutral-200"],
  },
});
