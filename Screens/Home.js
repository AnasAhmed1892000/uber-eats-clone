import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../Components/homeComponents/HeaderTabs";
import SearchBar from "../Components/homeComponents/SearchBar";
import Categories from "../Components/homeComponents/categories";
import RestaurantItems from "../Components/homeComponents/RestaurantItems";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization:
          "Bearer -W_3-jBEkV3K-mnrpfbLw7tJyDAcxhzp0NVK96WsyTN5QvoammDnV1Z1BkDMjoBwIsSXNzX9rg43sVfkniEMJyM2Z2TLngZP01qSHhpL7wP6zd5MA8leW9yn6TsUYnYx",
      },
    };
    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurants(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          paddingBottom: 235,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            paddingTop: 40,
          }}
        >
          <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <SearchBar cityHandler={setCity} />
        </View>
        <Categories />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{}}>
            <RestaurantItems restaurants={restaurants} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
