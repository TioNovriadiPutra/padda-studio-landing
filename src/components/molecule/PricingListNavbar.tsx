import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { pricingMobileData } from "@utils/constant/page";
import { colors } from "@themes/colors";
import { fontStyle } from "@themes/fonts";
import { useRecoilState } from "recoil";
import { pricingPageState } from "@stores/page";

type Props = {
	onScroll: (index: number) => void;
};

const PricingListNavbar = ({ onScroll }: Props) => {
	const [pricingPage, setPricingPage] = useRecoilState(pricingPageState);

	return (
		<View style={styles.container}>
			<FlatList
				data={pricingMobileData}
				horizontal
				keyExtractor={(_, index) => index.toString()}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.list}
				renderItem={({ item, index }) => (
					<Pressable
						style={[
							styles.button,
							{
								backgroundColor:
									pricingPage === index
										? colors["Neutral-100"]
										: colors["Neutral-50"],
							},
						]}
						onPress={() => {
							setPricingPage(index);
							onScroll(index);
						}}
					>
						<Text
							style={[
								fontStyle["BodyXSBold"],
								{
									color:
										pricingPage === index
											? colors["Neutral-950"]
											: colors["Neutral-500"],
								},
							]}
						>
							{item}
						</Text>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default PricingListNavbar;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 14,
		borderBottomWidth: 1,
		borderBottomColor: colors["Border"],
		justifyContent: "center",
	},
	list: {
		paddingHorizontal: 14,
		gap: 8,
	},
	button: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 24,
	},
	next: {
		position: "absolute",
		zIndex: 999,
		right: 6,
	},
});
