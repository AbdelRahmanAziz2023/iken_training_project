import { Colors } from "@/src/constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

interface TabBarIconProps {
  icon: React.FC<any>;
  color: string;
  size: number;
  focused: boolean;
}

export const TabBarIcon = ({ icon: Icon, color, size, focused }: TabBarIconProps) => {
  return (
    <View style={styles.iconContainer}>
      <Icon width={size} height={size} stroke={color} />
      {focused && <View style={styles.activeIndicator} />}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  activeIndicator: {
    position: "absolute",
    bottom: -20,
    height: 3,
    width: 30,
    backgroundColor: Colors.red,
    borderRadius: 2,
  },
});
