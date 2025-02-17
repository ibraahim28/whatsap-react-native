import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./bottomTabs";

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
