import { useFonts } from "expo-font";

const usePrepare = () => {
  const [fontsLoaded] = useFonts({
    Helvetica: require("@assets/fonts/Helvetica.ttf"),
    Playfair: require("@assets/fonts/Playfair_9pt-Regular.ttf"),
  });

  return {
    fontsLoaded,
  };
};

export default usePrepare;
