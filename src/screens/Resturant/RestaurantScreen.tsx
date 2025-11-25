import { Colors } from '@/src/constants/colors';
import { useGetRestaurantsQuery } from '@/src/services/api/Endpoints/RestaurantEndpoints';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { RestaurantList } from './RestaurantList';

const RestaurantScreen: React.FC = () => {
  const router = useRouter();
  const { data: restaurants = [], isLoading, isError } = useGetRestaurantsQuery();

  const handleRestaurantPress = (restaurant: { id: number; name: string }) => {
    router.push({
      pathname: '/(app)/(home)/Menu',
      params: {
        restaurantId: restaurant.id.toString(),
        restaurantName: restaurant.name,
      },
    });
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={Colors.red} />
        <Text style={styles.loadingText}>Loading restaurants...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Failed to load restaurants. Please try again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <RestaurantList 
        restaurants={restaurants}
        onRestaurantPress={handleRestaurantPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingBottom: 80,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 32,
    fontFamily: 'SenBold',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: 'SenRegular',
    color: Colors.textMuted,
  },
  errorText: {
    fontSize: 16,
    fontFamily: 'SenRegular',
    color: Colors.red,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default RestaurantScreen;
