import { useFonts } from "expo-font";

const usePrepare = () => {
	const [fontsLoaded] = useFonts({
		Helvetica: require("@assets/fonts/Helvetica.ttf"),
	});

	return {
		fontsLoaded,
	};
};

export default usePrepare;
