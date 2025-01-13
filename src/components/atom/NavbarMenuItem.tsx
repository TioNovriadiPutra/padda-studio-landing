import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import { Navbar } from "@interfaces/page";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";

type Props = {
	itemData: Navbar;
	onHandleClose: () => void;
	navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const NavbarMenuItem = ({ itemData, onHandleClose, navigationRef }: Props) => {
	const onHandlePress = () => {
		navigationRef.navigate(itemData.toPath);

		onHandleClose();
	};

	return (
		<Pressable style={styles.container} onPress={onHandlePress}>
			<Text style={[fontStyle["BodySReg"], styles.label]}>
				{itemData.title}
			</Text>
		</Pressable>
	);
};

export default NavbarMenuItem;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	label: {
		color: colors["Neutral-800"],
	},
});
