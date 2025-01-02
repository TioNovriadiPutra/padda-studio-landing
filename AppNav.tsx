import React from "react";
import { AppStack } from "@utils/constant/navigation";
import Home from "@views/Home";
import { NavigationContainer } from "@react-navigation/native";
import usePrepare from "@hooks/usePrepare";
import { StyleSheet, View } from "react-native";
import { MenuModal, Navbar } from "@components/organism";
import { colors } from "@themes/colors";
import { linking } from "@utils/config/linking";

const AppNav = () => {
  const { fontsLoaded, scrollRef } = usePrepare();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <MenuModal scrollRef={scrollRef} />
      <Navbar scrollRef={scrollRef} />

      <NavigationContainer linking={linking}>
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen
            name="Home"
            options={{ headerShown: false, title: "PADDA Studio" }}
          >
            {() => <Home scrollRef={scrollRef} />}
          </AppStack.Screen>
        </AppStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["Neutral-50"],
  },
});
