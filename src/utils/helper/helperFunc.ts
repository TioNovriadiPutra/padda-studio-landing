import { Linking } from "react-native";

export const onHandleBook = () => {
  Linking.openURL("https://whatsform.com/3jiwbi");
};

export const onHandleSocial = (url: string) => {
  Linking.openURL(url);
};
