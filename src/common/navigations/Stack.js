import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Welcome from '../../screens/Welcome';
import Onboarding from '../../screens/Onboarding';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import MyTab from './Tab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StackHome from './StackHome';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    // isAppFirstLaunched != null && (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* {isAppFirstLaunched && ( */}
      <>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </>
      {/* )} */}
      <Stack.Screen name="Login" component={MyTab} />
      <Stack.Screen name="Home" component={StackHome} />
    </Stack.Navigator>
    // )
  );
};

export default OnboardingStack;
