import { LayoutChangeEvent, ScrollView, StyleSheet, View } from "react-native";
import React, { MutableRefObject } from "react";
import { navbarData } from "@utils/constant/page";
import {
	CustomButton,
	NavbarMenuFooter,
	NavbarMenuItem,
} from "@components/atom";
import { colors } from "@themes/colors";
import Animated from "react-native-reanimated";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";
import { useRecoilValue } from "recoil";
import { currentRouteState } from "@stores/page";

type Props = {
	animatedStyle: { height: number };
	onHandleLayout: (e: LayoutChangeEvent) => void;
	scrollRef: MutableRefObject<ScrollView | null>;
	onHandleClose: () => void;
	navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const NavbarMenu = ({
	animatedStyle,
	onHandleLayout,
	scrollRef,
	onHandleClose,
	navigationRef,
}: Props) => {
	const currentRoute = useRecoilValue(currentRouteState);

	const onHandleBook = () => {
		navigationRef.current?.navigate("Booking");
	};

	return (
		<Animated.View style={[styles.container, animatedStyle]}>
			<View style={styles.content} onLayout={onHandleLayout}>
				<View style={styles.function}>
					{currentRoute === "Home" && (
						<View style={styles.list}>
							{navbarData.map((item, index) => (
								<NavbarMenuItem
									key={index.toString()}
									itemData={item}
									scrollRef={scrollRef}
									onHandleClose={onHandleClose}
									navigationRef={navigationRef}
								/>
							))}
						</View>
					)}

					{currentRoute !== "Booking" && (
						<CustomButton label="BOOKING NOW" onClick={onHandleBook} />
					)}
				</View>

				<NavbarMenuFooter />
			</View>
		</Animated.View>
	);
};

export default NavbarMenu;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-50"],
		overflow: "hidden",
	},
	content: {
		paddingTop: 32,
		paddingHorizontal: 14,
	},
	function: {
		alignItems: "center",
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: colors["Border"],
		gap: 24,
	},
	list: {
		gap: 32,
	},
});
