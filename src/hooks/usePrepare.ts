import { RootStackParamList } from "@interfaces/navigation";
import { createNavigationContainerRef } from "@react-navigation/native";
import { currentRouteState, scrollPosState } from "@stores/page";
import { useFonts } from "expo-font";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useRecoilState, useSetRecoilState } from "recoil";

const usePrepare = () => {
  const [navReady, setNavReady] = useState(false);

  const [currentRoute, setCurrentRoute] = useRecoilState(currentRouteState);
  const setScrollPos = useSetRecoilState(scrollPosState);

  const scrollRef = useRef<ScrollView | null>(null);
  const navigationRef = createNavigationContainerRef<RootStackParamList>();

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

  useEffect(() => {
    if (navigationRef) {
      setNavReady(true);
      setCurrentRoute(navigationRef.current?.getCurrentRoute()!.name!);
    }
  }, [navigationRef]);

  return {
    fontsLoaded,
    navReady,
    scrollRef,
    currentRoute,
    navigationRef,
  };
};

export default usePrepare;
