import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusComp = ({ status }) => {
  const statuData = status.item;
  return (
    <View
      style={{
        borderColor: "white",
        borderWidth: 1,
        flex: 1,
        width: "30%",
        backgroundColor: "#5a6373",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>{statuData.author}</Text>
      </View>
      <View>
        <Text>{statuData.text}</Text>
      </View>
    </View>
  );
};

export default StatusComp;

const styles = StyleSheet.create({});
