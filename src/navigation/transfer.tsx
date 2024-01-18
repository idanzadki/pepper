import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BackHeader} from '../components/backHeader';
import {Amount, NewBeneficiary, Transfer} from '../screens';

const TransferStack = createNativeStackNavigator();

export const TransferNavigator = () => (
  <TransferStack.Navigator
    screenOptions={{headerShown: true, header: BackHeader}}>
    <TransferStack.Screen name="Transfer" component={Transfer} />
    <TransferStack.Screen name="NewBeneficiary" component={NewBeneficiary} />
    <TransferStack.Screen name="Amount" component={Amount} />
  </TransferStack.Navigator>
);
