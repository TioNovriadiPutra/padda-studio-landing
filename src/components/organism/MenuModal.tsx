import {
	Modal,
	Pressable,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import useNavbarMenu from "@hooks/useNavbarMenu";
import { NavbarMenu } from "@components/molecule";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/navigation";

type Props = {
	navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
};

const MenuModal = ({ navigationRef }: Props) => {
	const { showMenu, menuAnimatedStyle, onHandleMenuLayout, onHandleClose } =
		useNavbarMenu();

	return (
		<Modal visible={showMenu} transparent>
			<View style={styles.container}>
				<View style={styles.navbar}>
					<Pressable style={icons["IconMD"]} onPress={onHandleClose} />
				</View>

				<View style={styles.backdrop}>
					<NavbarMenu
						animatedStyle={menuAnimatedStyle}
						onHandleLayout={onHandleMenuLayout}
						onHandleClose={onHandleClose}
						navigationRef={navigationRef}
					/>

					<TouchableWithoutFeedback onPress={onHandleClose}>
						<View style={styles.container} />
					</TouchableWithoutFeedback>
				</View>
			</View>
		</Modal>
	);
};

export default MenuModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	navbar: {
		height: 58,
		justifyContent: "center",
		alignItems: "flex-end",
		paddingRight: 14,
	},
	backdrop: {
		flex: 1,
		backgroundColor: colors["Modal"],
	},
});
