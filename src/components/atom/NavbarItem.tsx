import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Navbar } from "@interfaces/page";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";
import { useRecoilValue } from "recoil";
import { currentRouteState } from "@stores/page";

type Props = {
	itemData: Navbar;
	navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const NavbarItem = ({ itemData, navigationRef }: Props) => {
	const currentRoute = useRecoilValue(currentRouteState);

	const buttonAnim = useSharedValue(0);

	const barAnimatedStyle = useAnimatedStyle(() => {
		const width = interpolate(buttonAnim.value, [0, 1], [0, 100]);

		return {
			width: `${width}%`,
		};
	});

	const onHoverIn = () => {
		buttonAnim.value = withTiming(1, { duration: 200 });
	};

	const onHoverOut = () => {
		buttonAnim.value = withTiming(0, { duration: 200 });
	};

	const onHandleClick = () => {
		navigationRef.navigate(itemData.toPath);
	};

	return (
		<Pressable
			onHoverIn={onHoverIn}
			onHoverOut={onHoverOut}
			onPress={onHandleClick}
		>
			<Text
				style={[
					fontStyle["BodySReg"],
					{
						color:
							currentRoute === itemData.toPath
								? colors["Neutral-950"]
								: colors["Neutral-400"],
					},
				]}
			>
				{itemData.title}
			</Text>

			<Animated.View style={[styles.bar, barAnimatedStyle]} />
		</Pressable>
	);
};

export default NavbarItem;

const styles = StyleSheet.create({
	bar: {
		position: "absolute",
		height: 2,
		backgroundColor: colors["Neutral-400"],
		bottom: -6,
	},
});
