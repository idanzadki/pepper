import {StyleSheet} from 'react-native';
import {Colors} from '../../assets/theme/colors';

export const styles = StyleSheet.create({
  loading: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  home: {flex: 1, justifyContent: 'flex-start', gap: 15},
  title: {
    margin: 10,
    textAlign: 'auto',
    color: Colors.primaryText,
    fontSize: 15,
    fontWeight: 'bold',
  },
  balance: {
    flex: 0.1,
    borderWidth: 1,
    shadowOpacity: 0.7,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
