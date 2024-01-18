import {AppRouter, ModalProvider} from '..';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {View} from 'react-native';

export const App = () => {
  return (
    <Provider store={store}>
      <ModalProvider>
        <View
          style={{
            flex: 1,
            backgroundColor: 'green',
          }}>
          <AppRouter />
        </View>
      </ModalProvider>
    </Provider>
  );
};
