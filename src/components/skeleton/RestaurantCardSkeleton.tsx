// RestaurantCardSkeleton.tsx
import { Colors } from "@/src/constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Skeleton } from "react-native-skeletons";

const RestaurantCardSkeleton = () => {
  return (
    <View style={styles.card}>
      {/* Image Skeleton */}
      <Skeleton
        width={"100%"}
        height={180}
        borderRadius={16}
        color={Colors.gray200}
      />

      {/* Text Skeleton */}
      <View style={styles.content}>
        <Skeleton width={180} height={20} borderRadius={6} />
      </View>
    </View>
  );
};

export default RestaurantCardSkeleton;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  content: {
    padding: 16,
  },
});
