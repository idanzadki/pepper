import {AppRouter, ModalProvider} from '..';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';

export const App = () => (
  <Provider store={store}>
    <ModalProvider>
      <AppRouter />
    </ModalProvider>
  </Provider>
);
