import { Colors } from "@/src/constants/colors";
import { Icons } from "@/src/constants/images";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface QuantityControllerProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantityController: React.FC<QuantityControllerProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  const MinusIcon = Icons.minus as React.FC<SvgProps>;
  const PlusIcon = Icons.plus as React.FC<SvgProps>;

  const renderButton = (
    IconComponent: React.FC<SvgProps>,
    onPress: () => void
  ) => (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <IconComponent width={12} height={12} fill={Colors.white} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {renderButton(MinusIcon, onDecrease)}

      <Text style={styles.quantityText}>{quantity}</Text>

      {renderButton(PlusIcon, onIncrease)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 'auto',
    borderRadius: 24,
    backgroundColor: Colors.lightred,
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 16,
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
  },
  buttonPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  quantityText: {
    minWidth: 24,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "SenBold",
    color: Colors.white,
  },
});
