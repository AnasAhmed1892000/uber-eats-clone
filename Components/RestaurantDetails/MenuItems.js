import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Lasanga",
    description:
      "amazing indian dish with the tinderloin chicken off the sizzles",
    price: "19.20 $ ",
    image:
      "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg",
  },
  {
    title: "Tandori",
    description:
      "amazing indian dish with the tinderloin chicken off the sizzles",
    price: "14.50 $ ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjXlhx8Ab_njKyM-sIydOPHNORnAKaAejZAH0rg5VaFhm01zUcV_DPD8ruo6QGcS78B4&usqp=CAU",
  },
  {
    title: "Chilaquilies",
    description:
      "amazing indian dish with the tinderloin chicken off the sizzles",
    price: "32.30 $ ",
    image:
      "https://keviniscooking.com/wp-content/uploads/2021/12/Chilaquiles-Verdes-square.jpg",
  },
  {
    title: "Sushi",
    description:
      "amazing indian dish with the tinderloin chicken off the sizzles",
    price: "45.70 $ ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sushi_Roll.jpg/220px-Sushi_Roll.jpg",
  },
];

const MenuItems = ({ RestaurantName }) => {
  const dispatch = useDispatch();
  const selectItem = (items, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...items,
        restaurantName: RestaurantName,
        checkboxValue: checkboxValue,
      },
    });
  const cartItems = useSelector(
    (state) => state.CartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.title === food.title));
  };
  return (
    <SafeAreaView>
      <ScrollView style={{}}>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                fillColor="black"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const FoodInfo = ({ food }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text
        style={{
          fontWeight: "500",
        }}
      >
        {food.price}
      </Text>
    </View>
  );
};
const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: 25,
      }}
    />
  </View>
);
export default MenuItems;

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingRight: 170,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
