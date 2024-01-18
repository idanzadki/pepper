import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useModal} from './modal';
import {OnboardingNavigator, UserNavigator} from '../navigation';
import {useUser} from '../hooks/useUser';

export const AppRouter = () => {
  const [loading, setLoading] = useState(false);
  const {user, error = true} = useUser();
  // const {openModal, closeModal} = useModal();
  // useEffect(() => {
  //   if (Math.random() * 10 === 2) {
  //     openModal('error', {
  //       onOk: () => {
  //         closeModal();
  //       },
  //       title: 'Error',
  //       text: 'Somemthing Happend..., please try again later',
  //     });
  //   }
  // }, []);

  return (
    <NavigationContainer>
      {/* {!loading && !user ? <OnboardingNavigator /> : <UserNavigator />} */}
      <OnboardingNavigator />
    </NavigationContainer>
  );
};
