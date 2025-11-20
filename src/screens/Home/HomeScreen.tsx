import CustomButton from "@/src/components/common/CustomButton";
import CustomText from "@/src/components/common/CustomText";
import { Colors } from "@/src/constants/colors";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const router = useRouter();

  const handleOrderHistory = () => {
    router.push("/(app)/(home)/OrderHistory");
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <CustomText
            text="Welcome to Your App!"
            textStyle={styles.welcomeText}
          />
          <CustomText
            text="Start exploring your orders and more"
            textStyle={styles.subText}
          />
        </View>

        <View>
          <CustomButton
            title="View Order History"
            onPress={handleOrderHistory}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: Colors.white,
    padding: 30,
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  buttonContainer: {
    color: Colors.red,
  },
});

export default HomeScreen;