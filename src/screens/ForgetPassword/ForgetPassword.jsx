import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ForgetPassword.styles';
import Input from '../../components/Input';
const ForgetPassword = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Ionicons
        style={{padding: 20}}
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={26}
      />
      <View style={styles.container}>
        <Text style={styles.txt}>Forgot Password?</Text>
        <View style={{backgroundColor: 'pink', flex: 1}}>
          <Input placeholder="Enter your mail address" />
        </View>
      </View>
    </View>
  );
};

export default ForgetPassword;
