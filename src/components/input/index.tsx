import {ReactNode, useState} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {Colors} from '../../assets/theme/colors';

interface Props {
  children?: ReactNode;
  handleChange: (text: string) => void; // Updates the outer schema every time 'onChangeText' is provoked
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void; // Handles focusing of element
  optFunc?: (text: string) => string;
  title?: string;
  value: string;
  type?: KeyboardTypeOptions | 'password';
  touched?: boolean;
  error?: string;
  maxLength?: number;
  keyboard?: KeyboardTypeOptions;
  withDropdown?: boolean;
  style?: object;
  id?: string;
  reference?: React.RefObject<TextInput>;
  onTouch?: () => void;
  placeHolder?: string;
}

export const Input = ({
  handleChange,
  handleBlur,
  optFunc,
  reference,
  value,
  type,
  title,
  error,
  touched,
  keyboard,
  withDropdown,
  maxLength = 300,
  children,
  style,
  onTouch,
  placeHolder,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{justifyContent: 'center', width: '100%', margin: 2}}>
      <Text style={{fontWeight: 'bold', textAlign: 'auto'}}>
        {title || children}
      </Text>
      <TextInput
        ref={reference} // can only be assigned using useRef<TextInput>(), do not pass strings here
        onTouchStart={onTouch}
        secureTextEntry={type === 'password'}
        keyboardType={keyboard}
        style={{
          // textDecorationColor: 'green',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',

          borderColor:
            isFocused === true ? Colors.green : Colors.systemDarkGray,
          borderEndColor: Colors.white,
          borderRadius: 5,
          ...(withDropdown && {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }),
          backgroundColor: Colors.white,
          height: 46,
          textAlign: 'center',
          direction: 'rtl',
          paddingLeft: 5,
          ...style,
        }}
        onBlur={() => {
          {
            handleBlur && handleBlur;
          }
          setIsFocused(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        placeholder={placeHolder}
        onChangeText={text => {
          handleChange(optFunc ? optFunc(text) : text);
        }}
        value={value}
        selectionColor={Colors.green}
        maxLength={maxLength}
      />
      {error && touched && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};
