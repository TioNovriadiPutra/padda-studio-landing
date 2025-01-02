import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const useNavbar = () => {
  const navbarAnim = useSharedValue(0);

  const navbarAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(navbarAnim.value, [0, 1], [-64, 0]);
    const opacity = interpolate(navbarAnim.value, [0, 1], [0, 1]);

    return {
      transform: [{ translateY }],
      opacity,
    };
  });

  useEffect(() => {
    navbarAnim.value = withTiming(1, { duration: 1500 });
  }, []);

  return {
    navbarAnimatedStyle,
  };
};

export default useNavbar;
