import React from "react";
import { AppStack } from "@utils/constant/navigation";
import Home from "@views/Home";
import { NavigationContainer } from "@react-navigation/native";
import usePrepare from "@hooks/usePrepare";
import { StyleSheet, View } from "react-native";
import { MenuModal, Navbar } from "@components/organism";
import { colors } from "@themes/colors";
import { linking } from "@utils/config/linking";
import TC from "@views/TC";
import Booking from "@views/Booking";
import Pricing from "@views/Pricing";

const AppNav = () => {
	const {
		navReady,
		fontsLoaded,
		scrollRefHome,
		scrollRefPricing,
		navigationRef,
	} = usePrepare();

	if (!fontsLoaded || !navReady) return null;

	return (
		<View style={styles.container}>
			<MenuModal navigationRef={navigationRef} />
			<Navbar scrollRef={scrollRefHome} navigationRef={navigationRef} />

			<NavigationContainer ref={navigationRef} linking={linking}>
				<AppStack.Navigator initialRouteName="Home">
					<AppStack.Screen
						name="Home"
						options={{ headerShown: false, title: "PADDA Studio" }}
					>
						{() => <Home scrollRef={scrollRefHome} />}
					</AppStack.Screen>

					<AppStack.Screen
						name="TC"
						options={{ headerShown: false, title: "Terms & Condition" }}
					>
						{() => <TC />}
					</AppStack.Screen>

					<AppStack.Screen
						name="Pricing"
						options={{ headerShown: false, title: "Pricing" }}
					>
						{() => <Pricing scrollRef={scrollRefPricing} />}
					</AppStack.Screen>

					<AppStack.Screen
						name="Booking"
						options={{ headerShown: false, title: "Booking" }}
					>
						{() => <Booking />}
					</AppStack.Screen>
				</AppStack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default AppNav;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors["Neutral-50"],
	},
});
