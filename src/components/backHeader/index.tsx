import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BackButton} from '../backButton';
import {RootStackParamList} from '../../screens/RootStack';
import {useAppSelector} from '../../redux/store';

type RegistrationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Transfer'
>;

interface BackHeaderProps {
  title: string;
  textpadding?: number;
  optional?: () => void;
  ifArrowShow?: boolean;
}

// export const BackHeader = ({ title, optional, ifArrowShow }: BackHeaderProps) => {
//   const navigation = useNavigation<RegistrationProps>();
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//       }}
//     >
//       <View style={{ flex: 1 }}>
//         {ifArrowShow && (
//           <BackButton
//             onClick={() => (optional ? optional() : navigation.goBack())}
//             imageSource="backArrow"
//           />
//         )}
//       </View>
//       <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>{title}</Text>
//       <View style={{ flex: 1 }}></View>
//     </View>
//   );
// };
export const BackHeader = () => {
  const navigation = useNavigation<RegistrationProps>();
  const user = useAppSelector(s => s.userReducer.user);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center'}}>{user?.acount || 'No Acount'}</Text>
      </View>
    </View>
  );
};
