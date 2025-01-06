import { ScrollView } from "react-native";
import React, { MutableRefObject, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentRouteState } from "@stores/page";
import { useIsFocused } from "@react-navigation/native";
import { SectionFooter, TCContent, TCHeader } from "@components/organism";
import useMedia from "@hooks/useMedia";

type Props = {
	scrollRef: MutableRefObject<ScrollView | null>;
};

const TC = ({ scrollRef }: Props) => {
	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const { isMobile } = useMedia();
	const isFocused = useIsFocused();

	useEffect(() => {
		if (isFocused) {
			setCurrentRoute("TC");
		}
	}, [isFocused]);

	return (
		<ScrollView>
			<TCHeader isMobile={isMobile} />

			<TCContent isMobile={isMobile} />

			<SectionFooter isMobile={isMobile} scrollRef={scrollRef} />
		</ScrollView>
	);
};

export default TC;
