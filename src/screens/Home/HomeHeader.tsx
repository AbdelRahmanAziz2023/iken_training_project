import CustomText from "@/src/components/common/CustomText";
import { Colors } from "@/src/constants/colors";
import { Images } from "@/src/constants/images";
import { StyleSheet, View } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Images.logoIcon width={80} height={80} />
        <CustomText
          text="Welcome to Order Together!"
          textStyle={styles.welcomeText}
        />
      </View>

      <CustomText
        text="Start exploring your orders and more"
        textStyle={styles.subText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: 25,
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
    gap: 10, // spacing between row & subtitle
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  welcomeText: {
    fontSize: 22,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
  },

  subText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default HomeHeader;
