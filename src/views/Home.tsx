import { LayoutChangeEvent, ScrollView, StyleSheet } from "react-native";
import React, { MutableRefObject, useEffect, useState } from "react";
import {
	Section1,
	Section2,
	Section3,
	Section4,
	Section5,
	Section6,
	Section7,
	SectionFooter,
} from "@components/organism";
import { colors } from "@themes/colors";
import useMedia from "@hooks/useMedia";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentRouteState, scrollPosState } from "@stores/page";
import { navbarData } from "@utils/constant/page";
import { useIsFocused } from "@react-navigation/native";

type Props = {
	scrollRef: MutableRefObject<ScrollView | null>;
};

const Home = ({ scrollRef }: Props) => {
	const [image2Height, setImage2Height] = useState(0);

	const [scrollPos, setScrollPos] = useRecoilState(scrollPosState);

	const setCurrentRoute = useSetRecoilState(currentRouteState);

	const isFocused = useIsFocused();

	const { isMobile } = useMedia();

	const onHandleImageLayout = (e: LayoutChangeEvent) => {
		const { height } = e.nativeEvent.layout;

		setImage2Height(height);
	};

	useEffect(() => {
		if (isFocused) {
			setCurrentRoute("Home");
		}
	}, [isFocused]);

	return (
		<ScrollView
			ref={scrollRef}
			style={styles.container}
			onScroll={(e) => {
				const scroll = e.nativeEvent.contentOffset.y;
				setScrollPos(scroll);
			}}
			scrollEventThrottle={16}
		>
			<Section1 isMobile={isMobile} scrollRef={scrollRef} />

			<Section2
				trigger={isMobile ? scrollPos >= 913.05 : scrollPos >= 776}
				trigger2={scrollPos >= 1141.05 + image2Height}
				isMobile={isMobile}
				onLayout={onHandleImageLayout}
			/>

			<Section3
				trigger={
					isMobile ? scrollPos >= 2255.05 : scrollPos >= 940 + image2Height
				}
				isMobile={isMobile}
			/>

			<Section4 isMobile={isMobile} />

			<Section5
				trigger={
					isMobile
						? scrollPos >= navbarData[1].toMobile! - 97
						: scrollPos >= navbarData[1].toWeb! - 500
				}
				isMobile={isMobile}
			/>

			<Section6 scrollPos={scrollPos} isMobile={isMobile} />

			<Section7
				trigger={
					isMobile
						? scrollPos >= navbarData[1].toMobile! + 4568.5
						: scrollPos >= navbarData[1].toWeb! + 3224
				}
				isMobile={isMobile}
			/>

			<SectionFooter isMobile={isMobile} scrollRef={scrollRef} />
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Neutral-50"],
	},
});
