import { ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject, useEffect } from "react";
import { BookingContent, SectionFooter } from "@components/organism";
import useMedia from "@hooks/useMedia";
import { useSetRecoilState } from "recoil";
import { currentRouteState } from "@stores/page";
import { useIsFocused } from "@react-navigation/native";
import { colors } from "@themes/colors";

type Props = {
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Booking = ({ scrollRef }: Props) => {
	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const { isMobile } = useMedia();

	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setCurrentRoute("Booking");
		}
	}, [isFocused]);

	return (
		<ScrollView style={styles.container}>
			<BookingContent isMobile={isMobile} />

			<SectionFooter isMobile={isMobile} scrollRef={scrollRef} />
		</ScrollView>
	);
};

export default Booking;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-50"],
	},
});
