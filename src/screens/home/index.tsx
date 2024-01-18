import {Text, View} from 'react-native';
import {useUser} from '../../hooks/useUser';
import {useEffect} from 'react';
import {useAppSelector} from '../../redux/store';
import {Button, Loading} from '../../components';
import {Colors} from '../../assets/theme/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';

type HomeProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const {handleGetUser} = useUser();
  const navigation = useNavigation<HomeProps>();
  const user = useAppSelector(s => s.userReducer.user);
  const loading = useAppSelector(s => s.userReducer.loading);

  useEffect(() => {
    !user && handleGetUser();
  }, []);

  return loading ? (
    <View
      style={{
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}>
      <Loading />
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        padding: 15,
        justifyContent: 'space-between',
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            margin: 10,
            textAlign: 'center',
            color: Colors.primaryText,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Hello, {user?.username}
        </Text>
        <View
          style={{
            flex: 0.5,
            borderWidth: 1,
            borderRadius: 10,
            shadowOpacity: 0.7,
            shadowRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: Colors.primaryText,
              fontSize: 15,
              fontWeight: '600',
            }}>
            Balance: {user?.balance}
          </Text>
        </View>
      </View>
      <Button
        disabled={loading}
        onClick={() => {
          navigation.navigate('TransferTab');
        }}>
        Transfer
      </Button>
    </View>
  );
};

export default Home;
