import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.view}>
      <HeaderButtons
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButtons
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};
const HeaderButtons = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        borderRadius: 15,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => {
        props.setActiveTab(props.text);
      }}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 20,
          alignContent: "center",
          fontWeight: "600",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
export default HeaderTabs;

const styles = StyleSheet.create({
  HeadBtn: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  view: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
