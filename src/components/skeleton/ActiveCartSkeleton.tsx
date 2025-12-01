// ActiveCartSkeleton.tsx
import { Colors } from "@/src/constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Skeleton } from "react-native-skeletons";

const ActiveCartSkeleton = () => {
  return (
    <View style={styles.wrapper}>
      {/* Header Skeleton */}
      <View style={styles.header}>
        <Skeleton width={140} height={24} borderRadius={6} />
        <Skeleton width={80} height={28} borderRadius={50} />
      </View>

      {/* Card Skeleton */}
      <View style={styles.container}>
        {/* LEFT */}
        <View style={styles.leftWrapper}>
          {/* Image Skeleton */}
          <Skeleton width={65} height={65} borderRadius={16} />

          <View style={styles.textGroup}>
            <Skeleton width={120} height={20} borderRadius={6} />
            <Skeleton width={100} height={14} borderRadius={6} />
            <Skeleton width={90} height={14} borderRadius={6} />
          </View>
        </View>

        {/* RIGHT */}
        <View style={styles.rightWrapper}>
          <Skeleton width={70} height={14} borderRadius={4} />
          <Skeleton width={80} height={20} borderRadius={6} />

          {/* Button skeleton */}
          <Skeleton width={110} height={40} borderRadius={10} />
        </View>
      </View>
    </View>
  );
};

export default ActiveCartSkeleton;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  container: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 15,
    borderRadius: 18,
    minHeight: 140,
    alignItems: "center",
    backgroundColor: Colors.gray100, // neutral background for skeleton
  },

  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },

  textGroup: {
    gap: 6,
    flexShrink: 1,
  },

  rightWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    gap: 8,
  },
});
