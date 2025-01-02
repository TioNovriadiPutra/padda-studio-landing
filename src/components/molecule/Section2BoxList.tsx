import { StyleSheet, View } from "react-native";
import React from "react";
import { cardData } from "@utils/constant/page";
import { Section2Box } from "@components/atom";

type Props = {
  trigger: boolean;
  isMobile: boolean;
};

const Section2BoxList = ({ trigger, isMobile }: Props) => {
  return (
    <View style={isMobile ? styles.containerMobile : styles.containerWeb}>
      {cardData.map((item, index) => (
        <Section2Box
          key={index.toString()}
          itemData={item}
          index={index}
          trigger={trigger}
          isMobile={isMobile}
        />
      ))}
    </View>
  );
};

export default Section2BoxList;

const styles = StyleSheet.create({
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  containerMobile: {
    gap: 24,
  },
});
