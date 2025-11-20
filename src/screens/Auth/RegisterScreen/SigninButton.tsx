import CustomText from "@/src/components/common/CustomText";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";


const SignInButton = () => {
  const router = useRouter();
  const signUpPress = () => {
    router.replace("/(auth)/Login");
  };
  return (
    <View style={styles.container}>
      <CustomText text="Already have an account?" textStyle={styles.first} />
      <Pressable onPress={signUpPress}>
        <CustomText text="Sign In" textStyle={styles.second} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  first: {
    color: "#646982",
  },
  second: {
    color: "#0672CB",
    fontFamily: "SenBold",
  },
});

export default SignInButton;
