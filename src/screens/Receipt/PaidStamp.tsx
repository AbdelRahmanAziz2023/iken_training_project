import CustomText from "@/src/components/common/CustomText";
import React from "react";
import { StyleSheet, View } from "react-native";

const PaidStamp = () => (
  <View style={styles.stamp}>
    <CustomText text="PAID" textStyle={[styles.text]} />
  </View>
);

const styles = StyleSheet.create({
  stamp: {
    position: "absolute",
    top: "40%",
    left: "35%",
    transform: [{ rotate: "-15deg" }],
    padding: 6,
    paddingHorizontal: 20,
    borderWidth: 4,
    borderColor: "#33cc6633",
    borderRadius: 8,
    zIndex: 0,
  },

  text: {
    color: "#33cc6633",
    fontFamily: "SenExtraBold",
    fontSize: 20,
  },
});

export default PaidStamp;
