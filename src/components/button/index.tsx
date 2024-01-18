import {ReactNode} from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../assets/theme/colors';

interface ButtonProps {
  children: ReactNode;
  text?: string;
  onClick: () => void;
  style?: ViewStyle;
  color?: string;
  disabled?: boolean;
}

export const Button = ({
  style,
  children,
  color,
  onClick,
  disabled,
}: ButtonProps) => (
  <TouchableOpacity
    disabled={disabled}
    style={{
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: Colors.green,
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 15,
      backgroundColor: color === 'Green' ? Colors.green : 'white',
      // height: ,
      // width: 150,
      ...style,
    }}
    onPress={onClick}>
    <Text
      style={{
        fontSize: 17,
        color: color === 'Green' ? 'white' : '#428463',
        fontWeight: '600',
        textAlign: 'center',
      }}>
      {children}
    </Text>
  </TouchableOpacity>
);
