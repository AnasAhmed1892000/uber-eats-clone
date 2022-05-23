import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";

import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const RegisterScreen = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={[
          styles.FormStyle,
          {
            backgroundColor: "white",
            height: "100%",
            width: "100%",
          },
        ]}
      >
        <Image
          style={{
            width: 180,
            height: 150,
          }}
          source={{
            uri: "https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg",
          }}
        />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="grey"
          style={[
            styles.TextInput,
            {
              marginTop: 60,
            },
          ]}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="grey"
          style={styles.TextInput}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.Button} onPress={handleSignUp}>
          <Text style={styles.Text}>SIGN UP</Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Button
            title={"Already have account ?"}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  TextInput: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 2,
    justifyContent: "flex-end",
  },
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
  Text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
