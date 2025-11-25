import CustomButton from "@/src/components/common/CustomButton";
import CustomText from "@/src/components/common/CustomText";
import { Colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface EmptyCartProps {
  onAddItems: () => void;
}

export const EmptyCart: React.FC<EmptyCartProps> = ({ onAddItems }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="cart-outline" size={80} color={Colors.textMuted} />
        </View>
        <CustomText text="Your cart is empty" textStyle={styles.title} />
        <CustomText text="Add items from the menu to get started" textStyle={styles.description} />
        <CustomButton
          title="Browse Menu"
          onPress={onAddItems}
          btnStyle={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconContainer: {
    marginBottom: 24,
    opacity: 0.3,
  },
  title: {
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    color: Colors.textMuted,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    minWidth: 200,
  },
});
