import React from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from "native-base";

export default function BottomNavigation() {
  return (
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
