import { RootStackParamList } from "@interfaces/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@views/Home";

export const AppStack = createNativeStackNavigator<RootStackParamList>({
	screens: {
		Home: {
			screen: Home,
			linking: {
				path: "home",
			},
		},
	},
});
