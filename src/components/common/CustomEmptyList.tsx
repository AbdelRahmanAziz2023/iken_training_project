import { Colors } from "@/src/constants/colors";
import { Image, StyleSheet, View, ViewStyle } from "react-native";
import CustomText from "./CustomText";

interface CustomEmptyListProps {
  message: string;
  title: string;
  containerStyle?: ViewStyle;
}

const CustomEmptyList = ({
  message,
  title,
  containerStyle,
}: CustomEmptyListProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={require("@/assets/images/empty-list.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <CustomText
        text={title}
        textStyle={[styles.title]}
      />
      <CustomText
        text={message}
        textStyle={[styles.message]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    fontFamily: "SenMedium",
    color: Colors.gray500,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default CustomEmptyList;
