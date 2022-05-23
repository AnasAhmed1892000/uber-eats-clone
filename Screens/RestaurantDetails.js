import { StyleSheet, Text, View } from "react-native";
import React from "react";
import About from "../Components/RestaurantDetails/About";
import MenuItems from "../Components/RestaurantDetails/MenuItems";
import { Divider } from "react-native-elements";
import ViewCart from "../Components/RestaurantDetails/ViewCart";
const RestaurantDetails = ({ route, navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <View>
        <MenuItems RestaurantName={route.params.name} />
      </View>
      <ViewCart navigation={navigation} RestaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  viewStyle: {
    paddingBottom: 25,
  },
});
