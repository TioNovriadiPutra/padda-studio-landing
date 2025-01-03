import { StyleSheet, View } from "react-native";
import React from "react";
import { studioButtonData } from "@utils/constant/page";
import { Section5Box } from "@components/atom";

type Props = {
  trigger: boolean;
};

const Section5List = ({ trigger }: Props) => {
  return (
    <View style={styles.container}>
      {studioButtonData.map((item, index) => (
        <Section5Box
          key={index.toString()}
          itemData={item}
          trigger={trigger}
          index={index}
        />
      ))}
    </View>
  );
};

export default Section5List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 64,
  },
});
