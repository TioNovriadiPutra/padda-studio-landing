import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { MutableRefObject } from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useRecoilValue } from "recoil";
import { currentRouteState } from "@stores/page";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "@interfaces/navigation";

type Props = {
	isMobile: boolean;
	scrollRef?: MutableRefObject<ScrollView | null>;
};

const SectionFooterNav = ({ isMobile, scrollRef }: Props) => {
	const currentRoute = useRecoilValue(currentRouteState);

	const nav = useNavigation<AppNavigationProps>();

	const onHandleHome = () => {
		if (currentRoute !== "Home") {
			nav.navigate("Home");
		}

		scrollRef!.current?.scrollTo({
			y: 0,
			animated: true,
		});
	};

	const onHandlePricing = () => {
		if (currentRoute !== "Pricing") {
			nav.navigate("Pricing");
		}

		scrollRef!.current?.scrollTo({
			y: 0,
			animated: true,
		});
	};

	const onHandleBook = () => {
		if (currentRoute !== "Booking") {
			nav.navigate("Booking");
		}

		scrollRef!.current?.scrollTo({
			y: 0,
			animated: true,
		});
	};

	return (
		<View style={styles.container}>
			<Text style={[fontStyle["BodyMBold"], styles.title]}>Navigation</Text>

			<View style={styles.content}>
				<Pressable onPress={onHandleHome}>
					<Text
						style={[
							isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
							styles.label,
						]}
					>
						Home
					</Text>
				</Pressable>

				<Pressable onPress={onHandleHome}>
					<Text
						style={[
							isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
							styles.label,
						]}
					>
						About Us
					</Text>
				</Pressable>

				<Pressable onPress={onHandlePricing}>
					<Text
						style={[
							isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
							styles.label,
						]}
					>
						Pricing
					</Text>
				</Pressable>

				<Pressable onPress={onHandleHome}>
					<Text
						style={[
							isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
							styles.label,
						]}
					>
						FAQ
					</Text>
				</Pressable>
			</View>

			<Pressable onPress={onHandleBook}>
				<Text
					style={[
						isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
						styles.label,
					]}
				>
					Booking
				</Text>
			</Pressable>
		</View>
	);
};

export default SectionFooterNav;

const styles = StyleSheet.create({
	container: {
		maxWidth: 305,
	},
	title: {
		color: colors["Neutral-500"],
		marginBottom: 32,
	},
	content: {
		flexDirection: "row",
		gap: 24,
		marginBottom: 24,
	},
	label: {
		color: colors["Neutral-50"],
	},
});
