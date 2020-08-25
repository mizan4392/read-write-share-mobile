import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Container, Text } from "native-base";
import TopNavigation from "./src/components/TopNavigation.component";
import Home from "./src/pages/Home.page";
import NewsFeed from "./src/pages/NewsFeed.page";

export default function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);
  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <Home>
        <NewsFeed />
      </Home>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
