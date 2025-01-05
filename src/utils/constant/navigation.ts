import { RootStackParamList } from "@interfaces/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Booking from "@views/Booking";
import Home from "@views/Home";
import TC from "@views/TC";

export const AppStack = createNativeStackNavigator<RootStackParamList>({
	screens: {
		Home: {
			screen: Home,
			linking: {
				path: "home",
			},
		},
		TC: {
			screen: TC,
			linking: {
				path: "tc",
			},
		},
		Booking: {
			screen: Booking,
			linking: {
				path: "booking",
			},
		},
	},
});
