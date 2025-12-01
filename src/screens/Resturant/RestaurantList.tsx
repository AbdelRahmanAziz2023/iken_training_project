import { Colors } from "@/src/constants/colors";
import { Restaurant } from "@/src/services/api/endpoints/restaurantEndpoints";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantListProps {
  restaurants: Restaurant[];
  onRestaurantPress?: (restaurant: Restaurant) => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  onRestaurantPress,
}) => {
  const renderItem = ({ item }: { item: Restaurant }) => (
    <RestaurantCard
      id={item.id}
      name={item.name}
      onPress={() => onRestaurantPress?.(item)}
    />
  );

  const header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.subtitle}>
          {restaurants.length} restaurants available
        </Text>
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No restaurants found</Text>
    </View>
  );

  return (
    <FlatList
      data={restaurants}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={renderEmpty}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={header}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 32,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 64,
  },
  emptyText: {
    fontSize: 16,
    fontFamily: "SenRegular",
    color: Colors.textMuted,
  },
    header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: Colors.gray300,
    marginBottom: 12,
  },
    subtitle: {
    fontSize: 16,
    fontFamily: 'SenRegular',
    color: Colors.textMuted,
  },
});
