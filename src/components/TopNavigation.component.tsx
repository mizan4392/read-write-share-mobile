import React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  View,
  Text,
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

export default function TopNavigation() {
  return (
    <Header
      style={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <View style={{ backgroundColor: "#fff" }}>
        <Button light transparent large>
          <MaterialIcons name="event" size={24} color="black" />
        </Button>
      </View>

      <View>
        <Button light transparent large>
          <Text>RW&D</Text>
        </Button>
      </View>

      <View>
        <Button light transparent large>
          <MaterialIcons name="event" size={24} color="black" />
        </Button>
      </View>
    </Header>
  );
}
