import { ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { BookingContent, SectionFooter } from "@components/organism";
import useMedia from "@hooks/useMedia";
import { useSetRecoilState } from "recoil";
import { currentRouteState } from "@stores/page";
import { useIsFocused } from "@react-navigation/native";
import { colors } from "@themes/colors";

const Booking = () => {
	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const scrollRef = useRef<ScrollView | null>(null);

	const { isMobile } = useMedia();

	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setCurrentRoute("Booking");
		}
	}, [isFocused]);

	return (
		<ScrollView ref={scrollRef} style={styles.container}>
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
