import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
	isMobile: boolean;
};

const TCHeaderDesc = ({ isMobile }: Props) => {
	return (
		<View style={styles.container}>
			<Text
				style={[isMobile ? fontStyle["H3"] : fontStyle["H2"], styles.title]}
			>
				Understanding our Terms and Conditions ensures a seamless
				experience—take a moment to review them before your session!
			</Text>

			<Text
				style={[
					isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
					styles.desc,
				]}
			>
				Our Terms and Conditions are designed to ensure a smooth and
				professional experience for all our clients. This section outlines
				important details about booking policies, payment terms, cancellations,
				rescheduling, and the use of our studio and equipment.
			</Text>
		</View>
	);
};

export default TCHeaderDesc;

const styles = StyleSheet.create({
	container: {
		gap: 32,
	},
	title: {
		color: colors["Neutral-950"],
	},
	desc: {
		color: colors["Neutral-600"],
	},
});
