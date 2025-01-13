import { RootStackParamList } from "@interfaces/navigation";
import { createNavigationContainerRef } from "@react-navigation/native";
import { currentRouteState } from "@stores/page";
import { useFonts } from "expo-font";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useSetRecoilState } from "recoil";

const usePrepare = () => {
	const [navReady, setNavReady] = useState(false);

	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const scrollRefHome = useRef<ScrollView | null>(null);
	const scrollRefPricing = useRef<ScrollView | null>(null);
	const navigationRef = createNavigationContainerRef<RootStackParamList>();

	const [fontsLoaded] = useFonts({
		Helvetica: require("@assets/fonts/Helvetica.ttf"),
		Playfair: require("@assets/fonts/Playfair_9pt-Regular.ttf"),
		HelveticaLight: require("@assets/fonts/Helvetica-Light.ttf"),
	});

	useEffect(() => {
		if (navigationRef) {
			setNavReady(true);
			setCurrentRoute(navigationRef.current?.getCurrentRoute()!.name!);
		}
	}, [navigationRef]);

	return {
		fontsLoaded,
		navReady,
		scrollRefHome,
		scrollRefPricing,
		navigationRef,
	};
};

export default usePrepare;
