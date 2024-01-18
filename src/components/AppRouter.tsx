import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {UserNavigator} from '../navigation';

const MainStack = createNativeStackNavigator();

export const AppRouter = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="UserTab" component={UserNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
