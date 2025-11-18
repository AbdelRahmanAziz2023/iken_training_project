import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import CustomText from './CustomText';

type Props = {
  onPress?: () => void;
  title: string;
  isRounded?: boolean;
  isDisabled?: boolean;
  btnStyle?: ViewStyle;
};

const CustomButton = ({
  onPress,
  title,
  isRounded = false,
  isDisabled = false,
  btnStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[isRounded ? styles.roundedStyle : styles.mainStyle, btnStyle]}
    >
      <CustomText text={title} textStyle={styles.textStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    width: '100%',
    height: 60,
    backgroundColor: '#FF7622',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  roundedStyle: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF7622',
  },
  textStyle: {
    fontFamily: 'Sen-Bold',
    // fontSize: 1,
    color: '#fff',
  },
});

export default CustomButton;
