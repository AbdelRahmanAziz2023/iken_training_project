import { ENV } from "@/src/config/env";
import { Colors } from "@/src/constants/colors";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

const CustomEnvBanner = () => {
  return (
    <View style={styles.container}>
      <CustomText text={ENV.toUpperCase()} textStyle={[styles.text]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 0,
    padding: 10,
    backgroundColor: Colors.red100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightred,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  text: {
    fontFamily: "SenBold",
    color: "#fff",
  },
});

export default CustomEnvBanner;
