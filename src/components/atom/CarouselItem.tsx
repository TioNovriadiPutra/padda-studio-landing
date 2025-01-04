import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";
import { icons, WIDTH } from "@themes/sizing";

type Props = {
  isMobile: boolean;
  itemData: ImageSourcePropType;
};

const CarouselItem = ({ isMobile, itemData }: Props) => {
  return (
    <View style={isMobile ? styles.containerMobile : styles.containerWeb}>
      <Image source={itemData} style={icons["Image"]} />
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  containerWeb: {
    width: WIDTH,
    height: 774,
  },
  containerMobile: {
    width: WIDTH,
    height: undefined,
    aspectRatio: 1440 / 774,
  },
});
