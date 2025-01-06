import { StyleSheet, View } from "react-native";
import React from "react";

const BookingForm = () => {
	return (
		<View style={styles.container}>
			<iframe
				src="https://whatsform.com/3jiwbi"
				style={styles.iframe}
				frameBorder="0"
			/>
		</View>
	);
};

export default BookingForm;

const styles = StyleSheet.create({
	iframe: {
		width: "100%",
		minHeight: 1800,
		overflow: "hidden",
	},
	container: {
		flex: 1,
	},
});
