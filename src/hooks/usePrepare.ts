import { scrollPosState } from "@stores/page";
import { useFonts } from "expo-font";
import { useEffect, useRef } from "react";
import { ScrollView } from "react-native";
import { useSetRecoilState } from "recoil";

const usePrepare = () => {
  const setScrollPos = useSetRecoilState(scrollPosState);

  const scrollRef = useRef<ScrollView | null>(null);

  const [fontsLoaded] = useFonts({
    Helvetica: require("@assets/fonts/Helvetica.ttf"),
    Playfair: require("@assets/fonts/Playfair_9pt-Regular.ttf"),
  });

  useEffect(() => {
    setScrollPos(0);
    if (scrollRef) {
      scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true });
    }
  }, [scrollRef]);

  return {
    fontsLoaded,
    scrollRef,
  };
};

export default usePrepare;
