import React from "react";
import { StyleSheet, View } from "react-native";
import AuthHead from "../AuthHead";

const RegisterHeader = () => (
  <View style={styles.header}>
    <AuthHead
      title="Register"
      description="Please sign up to get started"
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 0.35,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default RegisterHeader;
