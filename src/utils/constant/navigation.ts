import { RootStackParamList } from "@interfaces/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AppStack = createNativeStackNavigator<RootStackParamList>();
