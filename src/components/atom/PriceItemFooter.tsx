import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fonts, fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
	tcData: string[];
	notes?: string;
	superNotes?: string;
	isMobile: boolean;
};

const PriceItemFooter = ({ tcData, notes, superNotes, isMobile }: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.tc}>
				{superNotes && (
					<Text
						style={[
							isMobile ? fontStyle["BodySBold"] : fontStyle["BodyMBold"],
							styles.superNotes,
						]}
					>
						{superNotes}
					</Text>
				)}

				{tcData.map((item, index) => (
					<Text
						key={index.toString()}
						style={[
							!isMobile && fontStyle["BodyMLight"],
							styles.label,
							isMobile && styles.labelMobile,
						]}
					>
						{item}
					</Text>
				))}
			</View>

			<View style={[styles.bar, isMobile ? styles.barMobile : styles.barWeb]} />

			{notes && (
				<Text
					style={[
						!isMobile && fontStyle["BodyMLight"],
						styles.label,
						isMobile && styles.labelMobile,
					]}
				>
					{notes}
				</Text>
			)}
		</View>
	);
};

export default PriceItemFooter;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		gap: 14,
	},
	tc: {
		gap: 8,
		alignItems: "center",
	},
	label: {
		textAlign: "center",
		color: colors["Neutral-600"],
	},
	labelMobile: {
		fontFamily: fonts["HelveticaLight"],
		fontSize: 16,
		lineHeight: 19.66,
	},
	superNotes: {
		textAlign: "center",
		color: colors["Neutral-600"],
	},
	bar: {
		height: 1,
		backgroundColor: colors["Neutral-300"],
	},
	barWeb: {
		width: 251,
	},
	barMobile: {
		width: 252,
	},
});
