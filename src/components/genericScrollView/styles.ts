import {StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../assets/theme/colors';

export const styles = StyleSheet.create({
  scrollView: {
    // borderWidth: 1,
    flex: 0.5,
    backgroundColor: '#ffffff',
  },
  list: {
    direction: 'rtl',
    borderWidth: 1,
  },
  h1: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
