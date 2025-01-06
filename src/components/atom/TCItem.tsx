import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TCText } from "@interfaces/page";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
	itemData: TCText[];
	indexData: number;
	isMobile: boolean;
};

const TCItem = ({ itemData, indexData, isMobile }: Props) => {
	return (
		<View style={styles.container}>
			<View>
				<Text
					style={[
						isMobile ? fontStyle["BodySReg"] : fontStyle["BodyMLight"],
						styles.text,
					]}
				>
					{`${indexData + 1}.`.padStart(indexData + 1 < 10 ? 4 : 2, " ")}
				</Text>
			</View>

			<Text>
				{itemData.map((item, index) => (
					<Text
						key={index.toString()}
						style={
							item.type === "bold"
								? isMobile
									? fontStyle["BodySBold"]
									: fontStyle["BodyMBold"]
								: isMobile
								? fontStyle["BodySReg"]
								: fontStyle["BodyMLight"]
						}
					>
						{item.text}{" "}
					</Text>
				))}
			</Text>
		</View>
	);
};

export default TCItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 10,
	},
	text: {
		color: colors["Neutral-800"],
	},
});
