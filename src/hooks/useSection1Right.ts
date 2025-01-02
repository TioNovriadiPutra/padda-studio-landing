import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const useSection1Right = () => {
  const sectionAnim = useSharedValue(0);
  const starAnim = useSharedValue(0);
  const barAnim = useSharedValue(0);
  const dotAnim = useSharedValue(0);

  const sectionAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(sectionAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateX }],
      opacity: sectionAnim.value,
    };
  });

  const starAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(starAnim.value, [0, 1], [0, 45]);
    const translateX = interpolate(starAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateX }, { rotate: `${rotate}deg` }],
      opacity: starAnim.value,
    };
  });

  const barAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(barAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: barAnim.value,
    };
  });

  const dotAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(dotAnim.value, [0, 1], [50, 0]);

    return {
      transform: [{ translateY }],
      opacity: dotAnim.value,
    };
  });

  useEffect(() => {
    sectionAnim.value = withTiming(1, { duration: 1000 });
    starAnim.value = withDelay(800, withTiming(1, { duration: 1000 }));
    barAnim.value = withDelay(500, withTiming(1, { duration: 1000 }));
    dotAnim.value = withDelay(650, withTiming(1, { duration: 1000 }));
  }, []);

  return {
    sectionAnimatedStyle,
    starAnimatedStyle,
    barAnimatedStyle,
    dotAnimatedStyle,
  };
};

export default useSection1Right;
