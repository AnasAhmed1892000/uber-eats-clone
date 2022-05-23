import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

/*const [term, setTerm] = useState("");*/

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 25,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            alignItems: "center",
            flexDirection: "row",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 10,
              backgroundColor: "white",
              padding: 8,
              borderRadius: 25,
              alignItems: "center",
            }}
          >
            <AntDesign name="clockcircle" size={11} />
            <Text
              style={{
                marginLeft: 5,
              }}
            >
              Search
            </Text>
          </View>
        )}
      />
    </View>
  );
}
