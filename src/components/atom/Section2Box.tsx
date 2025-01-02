import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Card } from "@interfaces/page";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import { fontStyle } from "@themes/fonts";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "@stores/page";
import { navbarData } from "@utils/constant/page";

type Props = {
  itemData: Card;
  index: number;
  trigger: boolean;
  isMobile: boolean;
};

const Section2Box = ({ itemData, index, trigger, isMobile }: Props) => {
  const scrollPos = useRecoilValue(scrollPosState);

  const sectionAnim = useSharedValue(0);

  const sectionAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(sectionAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: sectionAnim.value,
    };
  });

  useEffect(() => {
    if (trigger && sectionAnim.value === 0) {
      sectionAnim.value = withDelay(
        500 * index,
        withTiming(1, { duration: 1000 })
      );
    }
  }, [trigger]);

  return (
    <Animated.View
      style={[
        styles.container,
        !isMobile && styles.containerWeb,
        sectionAnimatedStyle,
      ]}
    >
      {!isMobile && (
        <View style={styles.box}>
          <Image source={itemData.icon} style={icons["IconXL"]} />
        </View>
      )}

      <Text
        style={[
          isMobile ? fontStyle["BodySBold"] : fontStyle["BodyL"],
          styles.title,
        ]}
      >
        {itemData.title}
      </Text>

      <Text
        style={[
          isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
          styles.desc,
        ]}
      >
        {itemData.desc}
      </Text>
    </Animated.View>
  );
};

export default Section2Box;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-900"],
    borderRadius: 24,
    padding: 32,
  },
  containerWeb: {
    flex: 1,
    maxWidth: 373.33,
    minHeight: 384,
  },
  box: {
    width: 90,
    height: 90,
    borderRadius: 24,
    backgroundColor: colors["Neutral-700"],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  title: {
    color: colors["Neutral-200"],
    marginBottom: 24,
  },
  desc: {
    color: colors["Neutral-400"],
  },
});
