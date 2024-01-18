import {useEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import {useAppSelector} from '../../redux/store';
import {useUser} from '../../hooks/useUser';
import {Button, Loading} from '../../components';
import {AutoComplete} from '../../components/autoComplete';
import {GenericScrollView} from '../../components/genericScrollView';
import {styles} from './styles';
import {setLoading} from '../../redux/actions/user';
import {useAutoComplete} from '../../hooks/useAutoComplete';
import {ImageHandler} from '../../utils/ImageHandler';
import {Colors} from '../../assets/theme/colors';
import {Benificiary} from './../../models/Beneficiary';

type TransferProps = NativeStackNavigationProp<RootStackParamList, 'Transfer'>;

const TransferListItem = ({
  beneficiary,
  onClick,
}: {
  beneficiary: Benificiary;
  onClick: (item: Benificiary) => void;
}) => (
  <TouchableOpacity
    onPress={() => {
      onClick(beneficiary);
    }}>
    <View style={styles.listItem} key={beneficiary.acount}>
      <View
        style={{
          borderRadius: 100,
          backgroundColor: Colors.gray,
        }}>
        <Text
          style={{
            color: Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
          }}>
          {beneficiary.name[0]}
        </Text>
      </View>
      {<Text>{beneficiary?.name || 'No'}</Text>}
    </View>
  </TouchableOpacity>
);

const Transfer = () => {
  const {handleGetBeneficiary} = useUser();
  const navigation = useNavigation<TransferProps>();
  const list = useAppSelector(s => s.userReducer.user?.beneficiaryList) || [];
  // const loading = useAppSelector(s => s.userReducer.loading);

  const {text, handleSetText, loading, autoList} = useAutoComplete({
    list: list || [],
    onSelect: () => {
      console.log('On Select');
    },
    onChange: t => handleSetText(t),
  });

  useEffect(() => {
    handleGetBeneficiary();
    console.log('Transfer text: ', text);
  }, [text]);

  return (
    <View style={styles.transfer}>
      <Text style={styles.h1}>העברה בנקאית</Text>
      <Text style={styles.h1}>{'למי להעביר את הכסף?'}</Text>

      <AutoComplete
        loading={loading}
        value={text}
        handleSelect={() => {
          // setLazyList(true);
        }}
        handleChange={handleSetText}
      />

      <GenericScrollView
        title="רשימת מוטבים"
        list={autoList}
        renderItem={benef => (
          <TransferListItem
            onClick={b => {
              console.log('B: ', b);
              setLoading(true);
              navigation.navigate('Amount');
            }}
            beneficiary={benef}
          />
        )}
      />

      <Button onClick={() => navigation.navigate('NewBeneficiary')}>
        Add New
      </Button>

      {loading && <Loading />}
    </View>
  );
};

export default Transfer;
