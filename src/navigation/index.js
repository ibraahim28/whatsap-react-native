import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./bottomTabs";
import MyStack from "./native-stack";

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
