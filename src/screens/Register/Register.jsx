import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import CardHeader from '../../components/Card/CardHeader';
import Input from '../../components/Input';
import styles from './Register.styles';
const Register = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Register</Text>
          <Text>ICON</Text>
        </View>
        <View>
          <Input placeholder="Fullname" />
          <Input placeholder="Mobile number" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button.ButtonLarge
          style={styles.btnSignUp}
          title="SIGN UP"></Button.ButtonLarge>
      </View>
    </>
  );
};

export default Register;
