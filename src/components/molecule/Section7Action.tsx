import { StyleSheet } from "react-native";
import React from "react";
import { AppButton } from "@components/atom";
import { onHandleBook } from "@utils/helper/helperFunc";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "@interfaces/navigation";
import Animated from "react-native-reanimated";

type Props = {
  animatedStyle: {
    transform: {
      translateY: number;
    }[];
    opacity: number;
  };
  isMobile: boolean;
};

const Section7Action = ({ animatedStyle, isMobile }: Props) => {
  const nav = useNavigation<AppNavigationProps>();

  const onHandleTNC = () => {
    nav.navigate("TC");
  };

  return (
    <Animated.View
      style={[
        styles.container,
        isMobile ? styles.containerMobile : styles.containerWeb,
        animatedStyle,
      ]}
    >
      <AppButton label="BOOKING NOW" type="emptyWhite" onClick={onHandleBook} />

      <AppButton
        label="TERMS & CONDITION"
        type="emptyWhite"
        onClick={onHandleTNC}
      />
    </Animated.View>
  );
};

export default Section7Action;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  containerWeb: {
    flexDirection: "row",
  },
  containerMobile: {
    alignItems: "center",
  },
});
