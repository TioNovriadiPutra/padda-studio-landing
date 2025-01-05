import { StyleSheet, View } from "react-native";
import React from "react";
import { BookingDesc, BookingForm } from "@components/molecule";

type Props = {
	isMobile: boolean;
};

const BookingContent = ({ isMobile }: Props) => {
	return (
		<View
			style={[
				styles.container,
				isMobile ? styles.containerMobile : styles.containerWeb,
			]}
		>
			<BookingDesc isMobile={isMobile} />

			<BookingForm />
		</View>
	);
};

export default BookingContent;

const styles = StyleSheet.create({
	container: {
		gap: 64,
	},
	containerWeb: {
		flexDirection: "row",
		paddingHorizontal: 120,
		paddingVertical: 100,
	},
	containerMobile: {
		paddingHorizontal: 14,
		paddingVertical: 64,
	},
});
