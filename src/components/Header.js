import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header = () => {
  return (
    <View
      style={{
        paddingVertical: 20,
        marginTop: 10,
        width: "100%",
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "white",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ color: "white", fontSize: 22 }}>Updates</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <View>
          <AntDesign name={"search1"} size={20} color={"white"} />
        </View>
        <View>
          <Entypo name={"dots-three-vertical"} size={20} color={"white"} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
