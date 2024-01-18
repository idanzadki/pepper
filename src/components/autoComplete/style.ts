import {StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../assets/theme/colors';

export const styles = StyleSheet.create({
  autoComplete: {
    flex: 0.3,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // width: "100%",
  },
  h1: {
    textAlign: 'right',
    fontSize: 20,
    width: 200,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  container: {
    // flex: 1,
    // height: 40,

    maxWidth: 150,
    maxHeight: 40,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // width: "100%",
    // padding: 5,
    // backgroundColor: '#f9f9f9',
  },
  inputHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  autoImage: {
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    marginHorizontal: 5,
  },
  autoInput: {
    flex: 1,
    color: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
