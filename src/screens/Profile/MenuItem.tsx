import CustomText from "@/src/components/common/CustomText";
import { Colors } from "@/src/constants/colors";
import { Icons } from "@/src/constants/images";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  icon: React.FC<any>;
  title: string;
  onPress?: () => void;
  iconStroke?: string;
};

const MenuItem = ({ icon: Icon, title, onPress, iconStroke }: Props) => {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <Icon width={24} height={24} stroke={iconStroke} />
      <CustomText text={title} textStyle={[styles.menuText]} />
      <Icons.arrow width={20} height={20} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
    gap: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: Colors.textPrimary,
  },
});

export default MenuItem;
