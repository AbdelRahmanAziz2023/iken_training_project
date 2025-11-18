import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

type Props = {
  Icon: React.FC<SvgProps>;
  onPress?: () => void;
  style?: ViewStyle;
};

const IconButton = ({ Icon, onPress, style }: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Icon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F4",
  },
  notify: {
    width: "30%",
    height: "30%",
    borderRadius: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
