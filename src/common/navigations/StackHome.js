import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingStack from './Stack';
import Home from '../../screens/Home';
const Stack = createNativeStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackHome;
