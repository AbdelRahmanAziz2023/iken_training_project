// RestaurantCardSkeletonList.tsx
import React from "react";
import { FlatList } from "react-native";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

const RestaurantCardSkeletonList = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      keyExtractor={(item) => item.toString()}
      renderItem={() => <RestaurantCardSkeleton />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
    />
  );
};

export default RestaurantCardSkeletonList;
