import { Colors } from "@/src/constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Skeleton } from "react-native-skeletons";

const MenuItemCardSkeleton = () => {
  return (
    <View style={styles.card}>
      {/* Header row */}
      <View style={styles.header}>
        <Skeleton width={160} height={22} borderRadius={6} />

        {/* Availability badge */}
        <Skeleton width={80} height={20} borderRadius={6} />
      </View>

      {/* Price row */}
      <View style={styles.priceRow}>
        <Skeleton width={60} height={20} borderRadius={6} />
        <Skeleton width={30} height={16} borderRadius={6} style={styles.currency} />
      </View>

      {/* Optional custom note skeleton */}
      <Skeleton width={"100%"} height={40} borderRadius={10} style={styles.note} />
    </View>
  );
};

export default MenuItemCardSkeleton;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  currency: {
    marginLeft: 10,
  },

  note: {
    marginTop: 14,
  },
});
