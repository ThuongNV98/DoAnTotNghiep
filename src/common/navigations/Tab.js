import React from 'react';
import {View, Text, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import ForgetPassword from '../../screens/ForgetPassword/ForgetPassword';
import CardHeader from '../../components/Card/CardHeader';
import {NavigationContainer} from '@react-navigation/native';
import ImageContant from '../../assets/styles/Image';
import StackPassword from './StackPassword';
const Tab = createMaterialTopTabNavigator();

const MyTab = () => {
  return (
    <>
      <CardHeader.CardHeader>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={ImageContant.logo} />
        </View>
      </CardHeader.CardHeader>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={StackPassword} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>
    </>
  );
};

export default MyTab;
