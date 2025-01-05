import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontStyle } from "@themes/fonts";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import { onHandleSocial } from "@utils/helper/helperFunc";

type Props = {
	isMobile: boolean;
};

const SectionFooterInfo = ({ isMobile }: Props) => {
	return (
		<View style={styles.container}>
			<Text style={[fontStyle["BodyMBold"], styles.title]}>
				Contact & Address
			</Text>

			<Text
				style={[
					isMobile ? fontStyle["BodySReg"] : fontStyle["BodyMLight"],
					styles.desc,
					styles.address,
				]}
			>
				Kampung Melayu, Sukajadi, Pekanbaru City, Riau
			</Text>

			<Text
				style={[
					isMobile ? fontStyle["BodySReg"] : fontStyle["BodyMLight"],
					styles.desc,
					styles.email,
				]}
			>
				paddastudio@gmail.com
			</Text>

			<Text
				style={[
					isMobile ? fontStyle["BodySReg"] : fontStyle["BodyMLight"],
					styles.desc,
					styles.address,
				]}
			>
				+62 821 1048 2938
			</Text>

			<View style={styles.footer}>
				<Pressable>
					<Image
						source={require("@assets/images/facebookWhite.png")}
						style={icons["IconMD"]}
					/>
				</Pressable>

				<Pressable>
					<Image
						source={require("@assets/images/twitterWhite.png")}
						style={icons["IconMD"]}
					/>
				</Pressable>

				<Pressable
					onPress={() =>
						onHandleSocial("https://www.instagram.com/paddastudio_")
					}
				>
					<Image
						source={require("@assets/images/instagramWhite.png")}
						style={icons["IconMD"]}
					/>
				</Pressable>
			</View>
		</View>
	);
};

export default SectionFooterInfo;

const styles = StyleSheet.create({
	container: {
		maxWidth: 305,
	},
	title: {
		color: colors["Neutral-500"],
		marginBottom: 34,
	},
	desc: {
		color: colors["Neutral-50"],
	},
	address: {
		marginBottom: 40,
	},
	email: {
		marginBottom: 8,
		textDecorationLine: "underline",
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 24,
	},
});
