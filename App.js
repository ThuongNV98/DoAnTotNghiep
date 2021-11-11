import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Body from './src/components/Body';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingStack from './src/common/navigations/Stack';
import Button from './src/components/Button';
import Welcome from './src/screens/Welcome';
import MyTab from './src/common/navigations/Tab';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Body>
          <OnboardingStack />
        </Body>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
