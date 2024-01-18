import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/theme/colors';

export const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    borderColor: Colors.colors.primaryGreen,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    width: 171,
    height: 48,
    fontSize: 17,
    paddingVertical: 13,
    marginBottom: 56,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonsContainer: {
    backgroundColor: Colors.colors.primaryBackground,
    flexDirection: 'row',
  },
});
