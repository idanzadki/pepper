import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const SmallBtn = ({ style, textStyle, text, onPress }) => (
  <TouchableOpacity style={[styles.buttonView, style]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableOpacity>
);
