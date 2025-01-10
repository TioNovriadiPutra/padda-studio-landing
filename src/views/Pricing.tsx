import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { MutableRefObject, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentRouteState } from "@stores/page";
import { useIsFocused } from "@react-navigation/native";
import { Pricing1, SectionFooter } from "@components/organism";
import useMedia from "@hooks/useMedia";

type Props = {
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Pricing = ({ scrollRef }: Props) => {
	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const { isMobile } = useMedia();
	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setCurrentRoute("Pricing");
		}
	}, [isFocused]);

	return (
		<ScrollView>
			<Pricing1 />

			<SectionFooter scrollRef={scrollRef} isMobile={isMobile} />
		</ScrollView>
	);
};

export default Pricing;

const styles = StyleSheet.create({});
