import CustomText from "@/src/components/common/CustomText";
import { Colors } from "@/src/constants/colors";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderHistoryScreen = () => {

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.content}>
        <View style={styles.emptyState}>
          <CustomText
            text="No orders yet"
            textStyle={styles.emptyText}
          />
          <CustomText
            text="Your order history will appear here"
            textStyle={styles.emptySubtext}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
  },
  content: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default OrderHistoryScreen;
