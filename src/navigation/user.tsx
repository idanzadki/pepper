import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login} from '../screens';
import {TransferNavigator} from './transfer';

const UserStack = createNativeStackNavigator();

export const UserNavigator = () => (
  <UserStack.Navigator screenOptions={{headerShown: false}}>
    <UserStack.Screen name="Login" component={Login} />
    <UserStack.Screen name="Home" component={Home} />
    <UserStack.Screen name="TransferTab" component={TransferNavigator} />
  </UserStack.Navigator>
);
