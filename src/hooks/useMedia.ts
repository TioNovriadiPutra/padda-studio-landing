import "@expo/match-media";
import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isMobile = useMediaQuery({
    maxWidth: 1224,
  });

  return {
    isMobile,
  };
};

export default useMedia;
