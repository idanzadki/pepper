import {Text, View} from 'react-native';
import {useUser} from '../../hooks/useUser';
import {useEffect} from 'react';
import {useAppSelector} from '../../redux/store';
import {Button} from '../../components';
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
    handleGetUser();
    // console.log('Loading: ', loading, user);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
      }}>
      <Text
        style={{
          // paddingVertical: 10,
          textAlign: 'center',
          color: Colors.black,
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        Hello, {user?.username}
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: Colors.black,
          fontSize: 15,
          fontWeight: '600',
        }}>
        Balance: {user?.balance}
      </Text>
      <View style={{}}>
        <Button
          disabled={loading}
          onClick={() => {
            navigation.navigate('Transfer');
          }}>
          Transfer
        </Button>
      </View>
    </View>
  );
};

export default Home;
