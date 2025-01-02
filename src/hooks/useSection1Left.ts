import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const useSection1Left = () => {
  const titleAnim = useSharedValue(0);
  const descAnim = useSharedValue(0);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(titleAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: titleAnim.value,
    };
  });

  const descAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(descAnim.value, [0, 1], [-50, 0]);

    return {
      transform: [{ translateY }],
      opacity: descAnim.value,
    };
  });

  useEffect(() => {
    titleAnim.value = withTiming(1, { duration: 1000 });
    descAnim.value = withDelay(200, withTiming(1, { duration: 1000 }));
  }, []);

  return {
    titleAnimatedStyle,
    descAnimatedStyle,
  };
};

export default useSection1Left;
