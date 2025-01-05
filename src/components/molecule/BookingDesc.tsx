import { StyleSheet, View } from "react-native";
import React from "react";
import { AppButton, BookingIntro } from "@components/atom";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProps } from "@interfaces/navigation";

type Props = {
	isMobile: boolean;
};

const BookingDesc = ({ isMobile }: Props) => {
	const nav = useNavigation<AppNavigationProps>();

	const onHandleNav = () => {
		nav.navigate("TC");
	};

	return (
		<View style={isMobile ? styles.containerMobile : styles.containerWeb}>
			<BookingIntro isMobile={isMobile} />

			<View style={styles.button}>
				<AppButton
					label="TERMS & CONDITION"
					type="black"
					onClick={onHandleNav}
				/>
			</View>
		</View>
	);
};

export default BookingDesc;

const styles = StyleSheet.create({
	containerWeb: {
		flex: 1,
		gap: 40,
	},
	containerMobile: {
		gap: 32,
	},
	button: {
		alignSelf: "center",
	},
});
