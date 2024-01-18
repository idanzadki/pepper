import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/theme/colors';

export const styles = StyleSheet.create({
  transfer: {
    flex: 1,
    gap: 10,
    direction: 'rtl',
    backgroundColor: Colors.white,
    padding: 15,
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: Colors.primaryText,
  },
  list: {},
  listItem: {
    direction: 'rtl',
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
    // borderTopWidth: 1,
    borderWidth: 1,
  },
});
