import CustomText from "@/src/components/common/CustomText";
import React from "react";
import { StyleSheet, View } from "react-native";

const UnpaidStatus = () => (
  <View style={styles.box}>
    <CustomText
      text="⚠️ Payment pending – waiting for You to pay"
      textStyle={[styles.text]}
    />
  </View>
);

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff7ed",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fed7aa",
    marginVertical: 10,
  },

  text: {
    color: "#c2410c",
    fontSize: 12,
    fontFamily: "SenBold",
  },
});

export default UnpaidStatus;
