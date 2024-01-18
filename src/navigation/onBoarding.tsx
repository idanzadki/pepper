import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Amount, Home, Login, NewBeneficiary, Transfer} from '../screens';
import {OnboardingLayout} from '../components/Layout/onBoardingLayout';
import {Text, TouchableOpacity, View} from 'react-native';
import {BackHeader} from '../components/backHeader';

const OnBoardingStack = createNativeStackNavigator();
const TransferStack = createNativeStackNavigator();

export const OnboardingNavigator = () => (
  // <OnboardingLayout>
  <OnBoardingStack.Navigator screenOptions={{headerShown: false}}>
    <OnBoardingStack.Screen name="Login" component={Login} />
    <OnBoardingStack.Screen name="Home" component={Home} />

    <OnBoardingStack.Screen
      name="Transfer"
      options={{
        headerShown: true,
        header: BackHeader,
      }}
      component={Transfer}
    />
    <OnBoardingStack.Screen
      name="Amount"
      component={Amount}
      options={{
        headerShown: true,
        header: BackHeader,
      }}
    />
    <OnBoardingStack.Screen
      name="NewBeneficiary"
      component={NewBeneficiary}
      options={{
        headerShown: true,
        header: BackHeader,
      }}
    />
  </OnBoardingStack.Navigator>
  // </OnboardingLayout>
);

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Amount, Login, NewBeneficiary, Transfer} from '../screens';
// import {TransferLayout} from '../components/Layout/onBoardingLayout';

// const TransferStack = createNativeStackNavigator();

// export const TransferNavigator = () => (
//   <TransferLayout>
//     <TransferStack.Navigator screenOptions={{headerShown: false}}>
//       <TransferStack.Screen name="Transfer" component={Transfer} />
//       <TransferStack.Screen name="NewBeneficiary" component={NewBeneficiary} />
//       <TransferStack.Screen name="Amount" component={Amount} />
//     </TransferStack.Navigator>
//   </TransferLayout>
// );
