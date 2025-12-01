import CustomText from "@/src/components/common/CustomText";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const DeliveryPaymentSection = () => {
  return (
    <View style={styles.container}>
      {/* Total Delivery */}
      <View style={styles.deliveryRow}>
        <View style={styles.flex1}>
          <CustomText text={"Total Delivery"} textStyle={[styles.label]} />

          <View style={styles.inputWrapper}>
            <View style={styles.currencyBox}>
              <CustomText text={"EGP"} textStyle={[styles.currencyText]} />
            </View>

            <TextInput
              keyboardType="numeric"
              defaultValue="30"
              style={styles.numberInput}
            />
          </View>
        </View>

        {/* Price per person */}
        <View style={styles.personBox}>
          <CustomText text={"= 10.00 / person"} textStyle={[styles.equalsText, styles.boldValue]} />
        </View>
      </View>

      {/* Payment Instructions */}
      <View style={styles.section}>
        <CustomText text={"Payment Instructions"} textStyle={[styles.label]} />

        <View style={styles.inputWrapper}>
          <View style={styles.iconBox}>
            <CustomText text={"💳"} textStyle={[styles.iconPlaceholder]} />
          </View>

          <TextInput
            placeholder="ahmed@instapay"
            style={styles.textInput}
          />
        </View>

        <CustomText text={"Participants will see this on their bill."} textStyle={[styles.hintText]} />
      </View>
    </View>
  );
};

export default DeliveryPaymentSection;

const styles = StyleSheet.create({
  deliveryRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 16,
    marginBottom: 24,
  },
  container: {
    marginVertical: 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  flex1: { flex: 1 },

  label: {
    fontSize: 10,
    fontWeight: "700",
    color: "#6B7280",
    textTransform: "uppercase",
    marginBottom: 4,
  },

  /** Total Delivery Input */
  inputWrapper: {
    position: "relative",
  },

  currencyBox: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    paddingLeft: 12,
  },

  currencyText: {
    color: "#6B7280",
    fontWeight: "700",
  },

  numberInput: {
    paddingLeft: 48,
    width: "100%",
    backgroundColor: "#F9FAFB",
    borderColor: "#D1D5DB",
    borderWidth: 1,
    color: "#111827",
    fontSize: 18,
    fontWeight: "700",
    borderRadius: 8,
    padding: 10,
  },

  /** Per Person */
  personBox: {
    marginBottom: 12,
  },

  equalsText: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "500",
   
  },

  boldValue: {
    color: "#111827",
    fontWeight: "700",
  },

  /** Payment Instructions */
  section: {
    marginBottom: 24,
  },

  iconBox: {
    position: "absolute",
    top: 12,
    left: 12,
  },

  iconPlaceholder: {
    fontSize: 18,
    color: "#9CA3AF",
  },

  textInput: {
    paddingLeft: 40,
    padding: 10,
    borderRadius: 8,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    fontSize: 14,
    backgroundColor: "#FFFFFF",
  },

  hintText: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 4,
  },
});
