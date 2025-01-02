import React from "react";
import { AppStack } from "@utils/constant/navigation";
import Home from "@views/Home";
import { NavigationContainer } from "@react-navigation/native";
import usePrepare from "@hooks/usePrepare";
import { StyleSheet, View } from "react-native";
import { MenuModal, Navbar } from "@components/organism";
import { colors } from "@themes/colors";

const AppNav = () => {
  const { fontsLoaded, scrollRef } = usePrepare();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <MenuModal scrollRef={scrollRef} />
      <Navbar scrollRef={scrollRef} />

      <NavigationContainer>
        <AppStack.Navigator initialRouteName="Home">
          <AppStack.Screen name="Home" options={{ headerShown: false }}>
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
