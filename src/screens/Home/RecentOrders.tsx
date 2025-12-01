import CustomText from "@/src/components/common/CustomText";
import OrderItem from "@/src/components/order/OrderItem";
import OrderItemSkeletonList from "@/src/components/skeleton/OrderItemSkeletonList";
import { Colors } from "@/src/constants/colors";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

export const orders = [
  {
    id: "1",
    restaurant: "Pizza Hut",
    total: 120,
    placedOn: "2025-11-10",
    image:
      "https://cdn.logojoy.com/wp-content/uploads/20200430135707/restaurant-logo-9.png",
    isHost: false,
    status: "Unpaid",
  },
  {
    id: "2",
    restaurant: "Koshary El Tahrir",
    total: 85,
    placedOn: "2025-11-12",
    image:
      "https://thumbs.dreamstime.com/b/restaurant-logo-design-idea-chef-hat-fork-graphic-leaf-shape-food-drinks-symbol-concept-cooking-eating-vector-template-173237325.jpg",
    isHost: true,
    status: "Pending",
  },
  {
    id: "3",
    restaurant: "Buffalo Burger",
    total: 240,
    placedOn: "2025-11-14",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/015/289/869/small/fast-food-logo-design-free-vector.jpg",
    isHost: false,
    status: "Paid",
  },
  {
    id: "4",
    restaurant: "Macarona El Prince",
    total: 175,
    placedOn: "2025-11-18",
    image:
      "https://cdn.logojoy.com/wp-content/uploads/20200430135707/restaurant-logo-12.png",
    isHost: true,
    status: "Completed",
  },
];

const RecentOrders = () => {
  const router = useRouter();

  const isLoading = false;
  const onPress = () => {
    router.push("/(app)/(home)/OrderHistory");
  };
  return (
    <View style={styles.ordersContainer}>
      <View style={styles.header}>
        <CustomText text="Recent Orders" textStyle={[styles.headerTitle]} />
        <Pressable onPress={onPress}>
          <CustomText
            text="View History →"
            textStyle={[styles.headerTextBtn]}
          />
        </Pressable>
      </View>

      {isLoading?<OrderItemSkeletonList/>:<FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ordersList}
        scrollEnabled={false}
      />}
    </View>
  );
};

const styles = StyleSheet.create({
  ordersContainer: {
    marginTop: 20,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
  },
  headerTextBtn: {
    fontFamily: "SenSemiBold",
    color: Colors.mustard,
  },
  ordersList: {
    padding: 10,
    paddingBottom: 150,
    gap: 10,
  },
});

export default RecentOrders;
