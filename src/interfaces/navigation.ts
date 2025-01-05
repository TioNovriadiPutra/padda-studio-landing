import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
	Home: undefined;
	TC: undefined;
	Booking: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<RootStackParamList>;
