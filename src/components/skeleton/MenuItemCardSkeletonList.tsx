import React from "react";
import { FlatList } from "react-native";
import MenuItemCardSkeleton from "./MenuItemCardSkeleton";

const MenuItemCardSkeletonList = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      keyExtractor={(item) => item.toString()}
      renderItem={() => <MenuItemCardSkeleton />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MenuItemCardSkeletonList;
