import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../../Screens/Home";
import AccountScreen from "../../Screens/AccountScreen";
import OrdersScreen from "../../Screens/OrdersScreen";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name={"home"}
                size={25}
                style={{
                  marginBottom: 3,
                  alignSelf: "center",
                }}
                color={focused ? "black" : "grey"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="OrderCompleted"
        component={OrdersScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name={"receipt"}
                size={25}
                style={{
                  marginBottom: 3,
                  alignSelf: "center",
                }}
                color={focused ? "black" : "grey"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name={"user"}
                size={25}
                style={{
                  marginBottom: 3,
                  alignSelf: "center",
                }}
                color={focused ? "black" : "grey"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };

const styles = StyleSheet.create({});
