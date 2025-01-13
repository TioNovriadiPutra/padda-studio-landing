import { ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject } from "react";
import { colors } from "@themes/colors";
import { LogoButton, NavbarList } from "@components/molecule";
import { CustomButton, HamburgerButton } from "@components/atom";
import Animated from "react-native-reanimated";
import useNavbar from "@hooks/useNavbar";
import useMedia from "@hooks/useMedia";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";
import { useRecoilValue } from "recoil";
import { currentRouteState } from "@stores/page";

type Props = {
	scrollRef: MutableRefObject<ScrollView | null>;
	navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const Navbar = ({ scrollRef, navigationRef }: Props) => {
	const currentRoute = useRecoilValue(currentRouteState);

	const { navbarAnimatedStyle } = useNavbar();
	const { isMobile } = useMedia();

	const onHandleHome = () => {
		if (currentRoute === "Home") {
			scrollRef.current?.scrollTo({ y: 0, animated: true });
		} else {
			navigationRef.navigate("Home");
		}
	};

	const onHandleBook = () => {
		if (currentRoute !== "Booking") {
			navigationRef.current?.navigate("Booking");
		}
	};

	return (
		<Animated.View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
				navbarAnimatedStyle,
			]}
		>
			<LogoButton onPress={onHandleHome} />

			{!isMobile && <NavbarList navigationRef={navigationRef} />}

			{isMobile ? (
				<HamburgerButton />
			) : (
				<CustomButton label="BOOKING NOW" onClick={onHandleBook} />
			)}
		</Animated.View>
	);
};

export default Navbar;

const styles = StyleSheet.create({
	container: {
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.15,
		shadowColor: colors.Black,
		shadowRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		zIndex: 999,
		backgroundColor: colors["Neutral-50"],
	},
	containerWeb: {
		height: 64,
		paddingHorizontal: 80,
	},
	containerMobile: {
		height: 58,
		paddingHorizontal: 14,
	},
});
