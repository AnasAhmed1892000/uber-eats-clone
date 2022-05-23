import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
const AccountScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView>
      <View style={styles.FormStyle}>
        <Text
          style={{
            fontWeight: "500",
          }}
        >
          {" "}
          E-mail : {auth.currentUser?.email}
        </Text>
        <TouchableOpacity style={styles.Button} onPress={handleSignOut}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
            }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "black",
    borderColor: "white",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    borderRadius: 25,
    // marginLeft: 50,
  },
  FormStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
