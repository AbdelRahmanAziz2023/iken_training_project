import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";
import { Images } from "../../constants/images";
import CustomText from "./CustomText";

interface CustomErrorProps {
  title: string;
  message: string;
  buttonTitle?: string;
  onPress?: () => void;
}

const CustomError = ({ title, message, buttonTitle, onPress }: CustomErrorProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Images.error style={styles.image} />

      <CustomText text={title} textStyle={[styles.title]} />
      <CustomText text={message} textStyle={[styles.message]} />

      {buttonTitle && (
        <Pressable style={styles.button} onPress={onPress}>
          <CustomText text={buttonTitle} textStyle={[styles.buttonTitle]} />
        </Pressable>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "92%",
    alignSelf: "center",
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },

  image: {
    width: 110,
    height: 110,
    resizeMode: "contain",
    marginBottom: 8,
  },

  title: {
    fontSize: 22,
    fontFamily: "SenBold",
    color: "#2C2C2C",
    textAlign: "center",
    marginTop: 4,
  },

  message: {
    fontSize: 15,
   
    color: "#6E6E6E",
    textAlign: "center",
    paddingHorizontal: 8,
    lineHeight: 22,
  },

  button: {
    marginTop: 12,
    width: "100%",
    height: 48,
    backgroundColor: "#FF7622",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#FF7622",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 4,
  },

  buttonTitle: {
    fontSize: 16,
    fontFamily: "SenBold",
    color: "#fff",
  },
});

export default CustomError;
