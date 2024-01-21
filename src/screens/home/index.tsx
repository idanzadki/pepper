import {Text, View} from 'react-native';
import {useUser} from '../../hooks/useUser';
import {useEffect} from 'react';
import {useAppSelector} from '../../redux/store';
import {Button, Loading} from '../../components';
import {Colors} from '../../assets/theme/colors';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import {styles} from './style';

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
    <View style={styles.loading}>
      <Loading />
    </View>
  ) : (
    <View style={styles.home}>
      <Text style={styles.title}>{new Date().toLocaleDateString()}</Text>
      <Text
        style={{
          margin: 10,
          textAlign: 'center',
          color: Colors.primaryText,
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        {`שלום${'\n'} ${user?.username}`}
      </Text>

      <View style={styles.balance}>
        <Text style={styles.title}>יתרת עו"ש: {user?.balance}</Text>
      </View>

      <Button
        disabled={loading}
        onClick={() => {
          navigation.navigate('TransferTab');
        }}>
        {'העברה בנקאית'}
      </Button>
    </View>
  );
};

export default Home;
