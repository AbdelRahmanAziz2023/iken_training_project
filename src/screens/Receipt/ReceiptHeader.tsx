import CustomText from "@/src/components/common/CustomText";
import React from "react";
import { StyleSheet, View } from "react-native";
import UnpaidStatus from "./UnpaidStatus";

const ReceiptHeader = ({ restaurant, date, status, isPaid }:{restaurant: string, date: string, status: string, isPaid: boolean} ) => {
  return (
    <View style={styles.header}>
      <View style={[styles.checkCircle, !isPaid && styles.unpaidCircle]}>
        <CustomText
          text={isPaid ? "✓" : "🧾"}
          textStyle={[styles.checkIcon, !isPaid && styles.unpaidIcon]}
        />
      </View>

      <CustomText text={restaurant} textStyle={[styles.title]} />
      <CustomText text={date} textStyle={[styles.date]} />

      <View style={[styles.badge, !isPaid && styles.unpaidBadge]}>
        <CustomText
          text={status}
          textStyle={[styles.badgeText, !isPaid && styles.badgeUnpaidText]}
        />
      </View>
      {!isPaid && <UnpaidStatus />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
    alignItems: "center",
  },

  checkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ecfdf5",
    borderWidth: 1,
    borderColor: "#bbf7d0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  unpaidCircle: {
    backgroundColor: "#fff7ed",
    borderColor: "#fed7aa",
  },

  checkIcon: {
    fontSize: 32,
    color: "#16a34a",
  },

  unpaidIcon: {
    color: "#ea580c",
  },

  title: {
    fontSize: 22,
    fontFamily: "SenExtraBold",
    color: "#111",
  },

  date: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },

  badge: {
    marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#ecfdf5",
    borderWidth: 1,
    borderColor: "#bbf7d0",
  },

  unpaidBadge: {
    backgroundColor: "#fff7ed",
    borderColor: "#fed7aa",
  },

  badgeText: {
    color: "#15803d",
    fontSize: 10,
    fontFamily: "SenBold",
  },

  badgeUnpaidText: {
    color: "#c2410c",
  },
});

export default ReceiptHeader;
