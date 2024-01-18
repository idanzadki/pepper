/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../screens/RootStack';
import { StackActions, useNavigation } from '@react-navigation/native';
import { Colors } from '../../../assets/theme/colors';

type FooterProps = NativeStackNavigationProp<RootStackParamList, 'Footer'>;

export const Footer = () => {
  const navigation = useNavigation<FooterProps>();
  const [selected, setSelected] = useState('Discover');

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
      }}
    >
      <TouchableOpacity
        disabled={selected === 'Discover'}
        onPress={() => {
          setSelected('Discover');
          navigation.dispatch(StackActions.replace('Discover'));
        }}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: selected === 'Discover' ? Colors.colors.primaryGreen : 'black',
          }}
        >
          Discover
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={selected === 'Search'}
        onPress={() => {
          setSelected('Search');
          navigation.dispatch(StackActions.replace('Search'));
        }}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: selected === 'Search' ? Colors.colors.primaryGreen : 'black',
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={selected === 'Map'}
        onPress={() => {
          setSelected('Map');
          navigation.dispatch(StackActions.replace('Map'));
        }}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: selected === 'Map' ? Colors.colors.primaryGreen : 'black',
          }}
        >
          Map
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={selected === 'Profile'}
        onPress={() => {
          setSelected('Profile');
          navigation.dispatch(StackActions.replace('Profile'));
        }}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: selected === 'Profile' ? Colors.colors.primaryGreen : 'black',
          }}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
