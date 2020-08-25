import React, { Component } from "react";
import { View } from "react-native";
import TopNavigation from "../components/TopNavigation.component";
import BottomNavigation from "../components/BottomNavigation.component";
import { Container, Content, Text } from "native-base";
export default class Home extends React.Component<{}> {
  render() {
    return (
      <Container>
        <TopNavigation />
        <Content>{this.props.children}</Content>
        <BottomNavigation />
      </Container>
    );
  }
}
