import {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import uuid from 'react-uuid';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {useUser} from '../../hooks/useUser';
import {Button, Loading} from '../../components';
import {styles} from './styles';
import {setLoading, setSelected} from '../../redux/actions/user';
import {useAutoComplete} from '../../hooks/useAutoComplete';
import {Search} from '../../components/search';
import {Beneficiary} from '../../models/Beneficiary';

type TransferProps = NativeStackNavigationProp<RootStackParamList, 'Transfer'>;

const Transfer = () => {
  const {handleGetBeneficiary} = useUser();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<TransferProps>();
  const list = useAppSelector(s => s.userReducer.user?.beneficiaryList);
  const loading = useAppSelector(s => s.userReducer.loading);

  const {text, handleSetText, autoList} = useAutoComplete({
    list: list || [],
    onSelect: () => {},
    onChange: t => handleSetText(t),
  });

  const handleItemClick = (item: Beneficiary) => {
    dispatch(setSelected(item));
    navigation.navigate('Amount');
  };

  const renderItem = ({item}: {item: Beneficiary}) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View
        style={{padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    handleGetBeneficiary();
    if (autoList.length === 0) {
      !loading && setLoading(true);
    }
  }, []);

  return (
    <View style={styles.transfer}>
      <Text style={styles.h1}>העברה בנקאית</Text>
      <Text style={styles.h1}>{'למי להעביר את הכסף?'}</Text>

      <Search
        placeHolder="שם המוטב"
        loading={loading}
        value={text}
        handleSelect={() => {
          // setLazyList(true);
        }}
        handleChange={handleSetText}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            windowSize={50}
            onEndReached={() => {}}
            keyExtractor={uuid}
            data={autoList}
            renderItem={renderItem}
          />
        )}
      </View>

      <Button
        onClick={() => {
          navigation.navigate('NewBeneficiary');
        }}>
        Add New
      </Button>
    </View>
  );
};

export default Transfer;
