import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Layout} from '../components';
import {Amount, Home, NewBeneficiary, Transfer} from '../screens';

const Stack = createNativeStackNavigator();

export const UserNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Transfer" component={Transfer} />
    <Stack.Screen name="NewBeneficiary" component={NewBeneficiary} />
    <Stack.Screen name="Amount" component={Amount} />
  </Stack.Navigator>
);

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Layout} from '../components';
// import {Amount, Home, Login, NewBeneficiary, Transfer} from '../screens';
// import {TransferNavigator} from '.';

// const Stack = createNativeStackNavigator();

// export const UserNavigator = () => (
//   <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
//     <Stack.Screen name="Login" component={Login} />
//     <Stack.Screen name="Home" component={Home} />
//     <TransferNavigator />
//   </Stack.Navigator>
// );
