import { ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject } from "react";
import { Section1, Section2 } from "@components/organism";
import { colors } from "@themes/colors";
import useMedia from "@hooks/useMedia";
import { useRecoilState } from "recoil";
import { scrollPosState } from "@stores/page";
import { navbarData } from "@utils/constant/page";

type Props = {
  scrollRef: MutableRefObject<ScrollView | null>;
};

const Home = ({ scrollRef }: Props) => {
  const [scrollPos, setScrollPos] = useRecoilState(scrollPosState);

  const { isMobile } = useMedia();

  return (
    <ScrollView
      ref={scrollRef}
      style={[styles.container, isMobile && styles.containerMobile]}
      onScroll={(e) => {
        const scroll = e.nativeEvent.contentOffset.y;

        console.log(scroll);

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
  containerMobile: {
    gap: 40,
  },
});
