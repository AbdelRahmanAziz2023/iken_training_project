import React from "react";
import { StyleSheet, View } from "react-native";
import { Skeleton } from "react-native-skeletons";

const OrderItemSkeleton = () => {
  return (
    <View style={styles.card}>
      {/* Header: image + status badge */}
      <View style={styles.headerRow}>
        <Skeleton width={65} height={65} borderRadius={16} />

        <Skeleton width={90} height={32} borderRadius={50} />
      </View>

      {/* Restaurant Name */}
      <Skeleton width={180} height={22} borderRadius={6} />

      {/* Host/Participant + Price */}
      <View style={styles.row}>
        <Skeleton width={110} height={32} borderRadius={50} />
        <Skeleton width={80} height={20} borderRadius={6} />
      </View>

      {/* Date */}
      <Skeleton width={140} height={16} borderRadius={6} />
    </View>
  );
};

export default OrderItemSkeleton;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

