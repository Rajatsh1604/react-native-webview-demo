/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FlexNav from "../navigation/FlexNavigation";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <FlexNav url={"https://flex.fod247.fitness/login"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    // backgroundColor: 'brown',
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default HomeScreen;
