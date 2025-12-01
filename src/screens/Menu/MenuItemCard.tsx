import { CustomizationModal } from "@/src/components/common/CustomizationModal";
import CustomNote from "@/src/components/common/CustomNote";
import CustomText from "@/src/components/common/CustomText";
import { Colors } from "@/src/constants/colors";
import {
  selectCartItems,
  updateItemNote
} from "@/src/store/slices/cartSlice";

import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

interface MenuItemCardProps {
  itemID: number;
  name: string;
  price: number;
  allowCustomization: boolean;
  isActive: boolean;
  onPress?: () => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  itemID,
  name,
  price,
  allowCustomization,
  isActive,
  onPress,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const cartItem = cartItems.find((i) => i.itemID === itemID);
  const quantity = cartItem?.quantity ?? 0;
  const customizationNote = cartItem?.customizationNote ?? "";

  const [modalVisible, setModalVisible] = useState(false);


  const handleConfirmCustomization = (note: string) => {
    dispatch(updateItemNote({ itemID, note }));
    setModalVisible(false);
  };


  const openCustomization = () => {
    if (allowCustomization) setModalVisible(true);
    else if (onPress) onPress();
  };

  return (
    <>
      <Pressable
        disabled={!isActive}
        onPress={openCustomization}
        style={({ pressed }) => [
          styles.card,
          !isActive && styles.inactiveCard,
          allowCustomization && isActive && styles.customizableBorder,
          pressed && styles.cardPressed,
        ]}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <CustomText text={name} textStyle={[styles.name]} />

          {!isActive && (
            <View style={styles.badge}>
              <CustomText text="Unavailable" textStyle={[styles.badgeText]} />
            </View>
          )}
        </View>

        {/* PRICE */}
        <View style={styles.priceRow}>
          <CustomText text={price.toFixed(2)} textStyle={[styles.price]} />
          <CustomText text="EGP" textStyle={[styles.currency]} />
        </View>

        {/* CUSTOM NOTE */}
        {customizationNote ? (
          <CustomNote
            note={customizationNote}
            onClear={() => dispatch(updateItemNote({ itemID, note: "" }))}
          />
        ) : null}
      </Pressable>

      <CustomizationModal
        visible={modalVisible}
        itemID={itemID}
        itemName={name}
        existingNote={customizationNote}
        onConfirm={handleConfirmCustomization}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  cardPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },

  customizableBorder: {
    borderColor: Colors.mustard,
    borderWidth: 2,
  },

  inactiveCard: {
    opacity: 0.45,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  name: {
    fontSize: 22,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
  },

  badge: {
    backgroundColor: Colors.gray200,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },

  badgeText: {
    fontSize: 11,
    fontFamily: "SenMedium",
    color: Colors.gray600,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 4,
  },

  price: {
    fontSize: 20,
    fontFamily: "SenBold",
    color: Colors.red,
  },

  currency: {
    fontSize: 13,
    marginLeft: 4,
    fontFamily: "SenMedium",
    color: Colors.gray500,
  },
});
