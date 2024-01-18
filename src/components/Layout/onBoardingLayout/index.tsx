/* eslint-disable react/react-in-jsx-scope */
import {ReactNode} from 'react';
import {View} from 'react-native';
// import { Header } from './header';
import {SafeAreaView} from 'react-native-safe-area-context';

interface OnboardingLayoutProps {
  children: ReactNode;
}

export const OnboardingLayout = ({children}: OnboardingLayoutProps) => (
  <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
    <View style={{flex: 1}}>{children}</View>
  </SafeAreaView>
);

// /* eslint-disable react/react-in-jsx-scope */
// import {ReactNode} from 'react';
// import {View} from 'react-native';
// // import { Header } from './header';
// import {SafeAreaView} from 'react-native-safe-area-context';

// interface TransferLayoutProps {
//   children: ReactNode;
// }

// export const TransferLayout = ({children}: TransferLayoutProps) => (
//   <SafeAreaView style={{flex: 1, width: '100%', height: '100%'}}>
//     <View style={{flex: 1}}>{children}</View>
//   </SafeAreaView>
// );
