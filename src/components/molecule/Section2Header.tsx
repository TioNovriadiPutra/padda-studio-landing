import { Image, LayoutChangeEvent, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import { Section2Desc } from "@components/atom";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useRecoilValue } from "recoil";
import { scrollPosState } from "@stores/page";

type Props = {
  trigger: boolean;
  isMobile: boolean;
  onLayout: (e: LayoutChangeEvent) => void;
};

const Section2Header = ({ trigger, isMobile, onLayout }: Props) => {
  const scrollPos = useRecoilValue(scrollPosState);

  const sectionAnim = useSharedValue(0);

  const sectionAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(sectionAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateX }],
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
      <Animated.View
        style={[
          isMobile ? styles.imageMobile : styles.imageWeb,
          sectionAnimatedStyle,
        ]}
        onLayout={onLayout}
      >
        <Image
          source={require("@assets/images/section2.png")}
          style={icons["Image"]}
        />
      </Animated.View>

      <Section2Desc
        trigger={isMobile ? scrollPos >= 1113.05 : trigger}
        isMobile={isMobile}
      />
    </View>
  );
};

export default Section2Header;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors["Neutral-700"],
    paddingBottom: 60,
  },
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    gap: 134,
  },
  containerMobile: {
    gap: 64,
  },
  imageWeb: {
    width: 460,
    height: 460,
  },
  imageMobile: {
    width: "100%",
    height: undefined,
    aspectRatio: 460 / 460,
  },
});
