import CustomText from "@/src/components/common/CustomText";
import { Colors } from "@/src/constants/colors";
import { Icons } from "@/src/constants/images";
import { StyleSheet, View } from "react-native";

type Props = {
  fullName: string;
  email: string;
};

const ProfileHeader = ({ fullName, email }: Props) => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.avatarContainer}>
        <Icons.user width={60} height={60} stroke={Colors.red} />
      </View>
      <CustomText text={fullName || "User"} textStyle={styles.userName} />
      <CustomText text={email || ""} textStyle={styles.userEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: Colors.white,
    padding: 30,
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontFamily: "SenBold",
    color: Colors.textPrimary,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default ProfileHeader;
