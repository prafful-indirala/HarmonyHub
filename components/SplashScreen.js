import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4874e8",
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "900", fontSize: 30 }}>
        HarmonyHub
      </Text>
      <View style={{ position: "absolute", bottom: 80 }}>
        <ActivityIndicator size={"large"} height={30} color={"#fff"} />
      </View>
    </View>
  );
};
