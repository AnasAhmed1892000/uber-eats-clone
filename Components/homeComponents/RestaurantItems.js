import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";

const RestaurantItems = (props) => {
  const navigation = useNavigation();
  return (
    <>
      {props.restaurants.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate("Restaurant", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            key={index}
            style={{
              marginTop: 8,
              padding: 5,
              backgroundColor: "white",
              padding: 15,
            }}
          >
            <ResturantImage image={restaurant.image_url} />
            <ResturantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};
const ResturantImage = ({ image }) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: "100%",
          height: 180,
        }}
      />
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="heart-outline"
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
          size={25}
          color={"#fff"}
        />
      </TouchableOpacity>
    </View>
  );
};
const ResturantInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <View>
        <Text>{name}</Text>
        <Text
          style={{
            color: "gray",
          }}
        >
          30-40 min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          width: 30,
          height: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};
export default RestaurantItems;

const styles = StyleSheet.create({});
