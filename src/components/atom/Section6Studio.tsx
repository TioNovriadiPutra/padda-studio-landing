import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Studio } from "@interfaces/page";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";
import { icons } from "@themes/sizing";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  itemData: Studio;
  even: boolean;
  trigger: boolean;
  isMobile: boolean;
};

const Section6Studio = ({ itemData, even, trigger, isMobile }: Props) => {
  const sectionAnim = useSharedValue(0);

  const sectionAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      sectionAnim.value,
      [0, 1],
      [even ? 100 : -100, 0]
    );

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
    <Animated.View
      style={[
        isMobile ? styles.containerMobile : styles.containerWeb,
        even ? styles.containerEven : styles.containerOdd,
        even && !isMobile ? styles.containerEvenWeb : null,
        !even && !isMobile ? styles.containerOddWeb : null,
        sectionAnimatedStyle,
      ]}
    >
      <View style={isMobile ? styles.imageMobile : styles.imageWeb}>
        <Image source={itemData.image} style={icons["Image"]} />
      </View>

      <View style={styles.content}>
        <Text
          style={[fontStyle["H3"], styles.name, !isMobile && styles.nameWeb]}
        >
          {itemData.name}
        </Text>

        <Text
          style={[
            isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
            styles.desc,
          ]}
        >
          {itemData.desc}
        </Text>

        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <View style={styles.box}>
              <Image
                source={require("@assets/images/user.png")}
                style={isMobile ? icons["IconXS"] : icons["IconSM"]}
              />

              <Text
                style={[
                  isMobile ? fontStyle["BodyXS"] : fontStyle["BodySReg"],
                  styles.label,
                  !isMobile && styles.labelWeb,
                ]}
              >
                {itemData.pax} PAX
              </Text>
            </View>

            <View style={styles.box}>
              <Text
                style={[
                  isMobile ? fontStyle["BodyXS"] : fontStyle["BodySReg"],
                  styles.label,
                  !isMobile && styles.labelWeb,
                ]}
              >
                Rp {itemData.pricePerHour || itemData.sharing}K /Hour{" "}
                {itemData.sharing && "(Sharing)"}
              </Text>
            </View>

            {!isMobile && (
              <View style={styles.box}>
                <Text
                  style={[
                    isMobile ? fontStyle["BodyXS"] : fontStyle["BodySReg"],
                    styles.label,
                    !isMobile && styles.labelWeb,
                  ]}
                >
                  Rp {itemData.pricePer3Hous || itemData.private}K /3 Hour{" "}
                  {itemData.private && "(Private)"}
                </Text>
              </View>
            )}
          </View>

          {isMobile && (
            <View style={[styles.box, isMobile && styles.boxMobile]}>
              <Text
                style={[
                  isMobile ? fontStyle["BodyXS"] : fontStyle["BodySReg"],
                  styles.label,
                  !isMobile && styles.labelWeb,
                ]}
              >
                Rp {itemData.pricePer3Hous || itemData.private}K /
                {itemData.pricePer3Hous && "3 "}Hour{" "}
                {itemData.private && "(Private)"}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Animated.View>
  );
};

export default Section6Studio;

const styles = StyleSheet.create({
  containerWeb: {
    height: 660,
    paddingVertical: 100,
    paddingHorizontal: 120,
    alignItems: "center",
    gap: 136,
  },
  containerMobile: {
    height: 835,
    paddingHorizontal: 14,
    paddingVertical: 64,
    gap: 64,
  },
  containerEven: {
    backgroundColor: colors["Neutral-100"],
  },
  containerEvenWeb: {
    flexDirection: "row-reverse",
  },
  containerOdd: {
    backgroundColor: colors["Neutral-50"],
  },
  containerOddWeb: {
    flexDirection: "row",
  },
  content: {
    flex: 1,
    gap: 24,
  },
  name: {
    color: colors["Neutral-900"],
  },
  nameWeb: {
    textDecorationLine: "underline",
  },
  desc: {
    color: colors["Neutral-600"],
  },
  footerContainer: {
    gap: 14,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  box: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors["Border"],
    gap: 10,
  },
  boxMobile: {
    alignSelf: "flex-start",
  },
  label: {
    color: colors["Neutral-600"],
  },
  labelWeb: {
    fontSize: 18,
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
