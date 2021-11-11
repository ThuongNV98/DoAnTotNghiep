import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './Home.styles';
import HeaderTabs from '../../components/HeaderTabs/HeaderTabs';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
};

export default Home;
