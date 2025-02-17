import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { statuses } from "../config/data";
import StatusComp from "./StatusComp";
const StatusSection = ({nav}) => {
  console.log(nav);
  return (
    <View
      style={{
        flex: 2,
        borderWidth: 2,
        borderColor: "white",
        width: "100%",
        gap: 20,
        padding: 10,
      }}
    >
      <View>
        <Text style={{ color: "white", fontSize: 22 }}>Status</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            width: "30%",
            backgroundColor: "#5a6373",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={()=>{nav.navigate('Camera')}}>
            <Text style={{ color: "white", fontSize: 150, opacity: 0.3 }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={statuses}
            horizontal
            renderItem={(item) => <StatusComp status={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default StatusSection;

const styles = StyleSheet.create({});
