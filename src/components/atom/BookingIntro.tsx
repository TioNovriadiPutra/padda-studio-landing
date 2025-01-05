import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
	isMobile: boolean;
};

const BookingIntro = ({ isMobile }: Props) => {
	return (
		<View style={{ gap: isMobile ? 40 : 64 }}>
			<Text
				style={[isMobile ? fontStyle["H3"] : fontStyle["H2"], styles.title]}
			>
				Book your session today and let us bring your vision to life!
			</Text>

			<Text
				style={[
					isMobile ? fontStyle["BodySReg"] : fontStyle["SubtitleLight"],
					styles.desc,
				]}
			>
				Choose your preferred studio, select a package that suits your needs,
				and let us handle the rest. With flexible scheduling and a dedicated
				team ready to bring your vision to life, securing your spot has never
				been simpler. Don’t wait—book your session today and let’s create
				something unforgettable!
			</Text>
		</View>
	);
};

export default BookingIntro;

const styles = StyleSheet.create({
	title: {
		color: colors["Neutral-900"],
	},
	desc: {
		color: colors["Neutral-700"],
	},
});
