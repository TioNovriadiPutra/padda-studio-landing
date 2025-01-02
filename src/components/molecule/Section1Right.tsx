import { StyleSheet, View } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import useSection1Right from "@hooks/useSection1Right";
import { icons } from "@themes/sizing";

type Props = {
  isMobile: boolean;
};

const Section1Right = ({ isMobile }: Props) => {
  const {
    barAnimatedStyle,
    dotAnimatedStyle,
    sectionAnimatedStyle,
    starAnimatedStyle,
  } = useSection1Right();

  return (
    <View>
      <Animated.Image
        source={require("@assets/images/barbar.png")}
        style={[
          styles.barbar,
          isMobile ? styles.barbarMobile : styles.barbarWeb,
          barAnimatedStyle,
        ]}
      />

      {!isMobile && (
        <Animated.Image
          source={require("@assets/images/dotdot.png")}
          style={[styles.dotdot, dotAnimatedStyle]}
        />
      )}

      <View style={isMobile ? styles.imageMobile : styles.imageWeb}>
        <Animated.Image
          source={require("@assets/images/section1.png")}
          style={[icons["Image"], sectionAnimatedStyle]}
        />
      </View>

      <Animated.Image
        source={require("@assets/images/star.png")}
        style={[
          styles.star,
          isMobile ? styles.starMobile : styles.starWeb,
          starAnimatedStyle,
        ]}
      />
    </View>
  );
};

export default Section1Right;

const styles = StyleSheet.create({
  barbar: {
    position: "absolute",
  },
  barbarWeb: {
    width: 208,
    height: 105,
    top: -41,
    alignSelf: "center",
  },
  barbarMobile: {
    width: 147.01,
    height: 74.33,
    top: -29.02,
    right: 0,
  },
  dotdot: {
    position: "absolute",
    width: 114,
    height: 114,
    bottom: -101,
    right: 0,
  },
  imageWeb: {
    width: 469,
    height: 525,
  },
  imageMobile: {
    width: "100%",
    height: undefined,
    aspectRatio: 469 / 525,
  },
  star: {
    position: "absolute",
  },
  starWeb: {
    bottom: -74,
    left: 10,
    width: 148,
    height: 148,
  },
  starMobile: {
    bottom: -52.38,
    left: 7.04,
    width: 104.6,
    height: 104.6,
  },
});
