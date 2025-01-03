import { LayoutChangeEvent, ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject, useState } from "react";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "@components/organism";
import { colors } from "@themes/colors";
import useMedia from "@hooks/useMedia";
import { useRecoilState } from "recoil";
import { scrollPosState } from "@stores/page";
import { navbarData } from "@utils/constant/page";

type Props = {
  scrollRef: MutableRefObject<ScrollView | null>;
};

const Home = ({ scrollRef }: Props) => {
  const [image2Height, setImage2Height] = useState(0);

  const [scrollPos, setScrollPos] = useRecoilState(scrollPosState);

  const { isMobile } = useMedia();

  const onHandleImageLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;

    setImage2Height(height);
  };

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      onScroll={(e) => {
        const scroll = e.nativeEvent.contentOffset.y;
        setScrollPos(scroll);
      }}
      scrollEventThrottle={16}
    >
      <Section1 isMobile={isMobile} />

      <Section2
        trigger={
          isMobile
            ? scrollPos >= navbarData[0].toMobile! - 100
            : scrollPos >= navbarData[0].toWeb! - 100
        }
        trigger2={scrollPos >= navbarData[0].toMobile! + 128 + image2Height}
        isMobile={isMobile}
        onLayout={onHandleImageLayout}
      />

      <Section3
        trigger={
          isMobile
            ? scrollPos >= navbarData[0].toMobile! + 1242
            : scrollPos >= navbarData[0].toWeb! + 64 + image2Height
        }
        isMobile={isMobile}
      />

      <Section4 isMobile={isMobile} />

      <Section5
        trigger={
          isMobile
            ? scrollPos >= navbarData[1].toMobile! - 97
            : scrollPos >= navbarData[1].toWeb! - 500
        }
        isMobile={isMobile}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["Neutral-50"],
  },
});
