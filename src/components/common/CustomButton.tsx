import { Colors } from '@/src/constants/colors';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import CustomText from './CustomText';

type Props = {
  onPress?: () => void;
  title: string;
  isDisabled?: boolean;
  btnStyle?: ViewStyle;
  Icon?: React.FC<SvgProps>;
};

const CustomButton = ({
  onPress,
  title,
  isDisabled = false,
  btnStyle,
  Icon,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.mainStyle, btnStyle]}
    >
      <View style={styles.content}>
        {Icon && <Icon style={styles.iconWrapper} />}
        <CustomText text={title} textStyle={styles.textStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.mustard,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginRight: 8, // space between icon and text
  },
  textStyle: {
    fontFamily: 'SenBold',
    fontSize: 18,
    color: '#fff',
  },
});

export default CustomButton;
