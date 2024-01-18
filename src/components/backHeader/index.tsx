import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../screens/RootStack';
import {useAppSelector} from '../../redux/store';

type RegistrationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Transfer'
>;

export const BackHeader = () => {
  const navigation = useNavigation<RegistrationProps>();
  const user = useAppSelector(s => s.userReducer.user);
  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{padding: 5}}
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
