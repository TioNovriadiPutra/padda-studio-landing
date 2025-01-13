import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
	isMobile: boolean;
	desc: string;
	optional?: string[];
};

const SpecialOfferFooter = ({ isMobile, desc, optional }: Props) => {
	return (
		<View style={styles.container}>
			<Text
				style={[
					isMobile ? fontStyle["BodyMLight"] : fontStyle["SubtitleLight"],
					styles.desc,
				]}
			>
				{desc}
			</Text>

			{optional && (
				<View style={styles.list}>
					{optional.map((item, index) => (
						<View key={index.toString()} style={styles.row}>
							<View
								style={[
									styles.circle,
									isMobile ? styles.circleMobile : styles.circleWeb,
								]}
							/>

							<Text
								style={[
									isMobile
										? fontStyle["BodyMLight"]
										: fontStyle["SubtitleLight"],
									styles.label,
								]}
							>
								{item}
							</Text>
						</View>
					))}
				</View>
			)}
		</View>
	);
};

export default SpecialOfferFooter;

const styles = StyleSheet.create({
	container: {
		gap: 32,
	},
	desc: {
		color: colors["Neutral-50"],
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	circle: {
		borderRadius: 50,
		backgroundColor: colors["Neutral-50"],
	},
	circleWeb: {
		width: 6,
		height: 6,
	},
	circleMobile: {
		width: 4,
		height: 4,
	},
	label: {
		color: colors["Neutral-50"],
	},
	list: {
		gap: 5,
	},
});
