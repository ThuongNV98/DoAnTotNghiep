import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import ForgetPassword from '../../screens/ForgetPassword/ForgetPassword';
import Home from '../../screens/Home';
const Stack = createNativeStackNavigator();

const StackPassword = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default StackPassword;
