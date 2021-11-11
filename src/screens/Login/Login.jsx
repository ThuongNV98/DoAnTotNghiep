import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CardHeader from '../../components/Card/CardHeader';
import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';
const Login = ({navigation}) => {
  const [txtUsername, setUsername] = useState('');
  const [txtPassword, setPassword] = useState('');

  const test = () => {
    if (txtUsername == 'Abc' && txtPassword == 'Abc') {
      navigation.navigate('Home');
    } else if (txtUsername == '' && txtPassword == '') {
      console.log('Dai ngu');
    } else {
      console.log('Ngu');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Input
        onChangeText={txtUsername => setUsername(txtUsername)}
        value={() => txtUsername}
        placeholder="Username, Mobile number"
      />
      <Input
        onChangeText={txtPassword => setPassword(txtPassword)}
        value={txtPassword}
        placeholder="Password"
      />

      <View style={styles.txtForgetPasswordContainer}>
        <Text
          style={styles.txtForgetPassword}
          onPress={() => navigation.navigate('ForgetPassword')}>
          Forget Password
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button.ButtonLarge
          onPress={() => test()}
          style={styles.btnLogin}
          title="LOGIN"></Button.ButtonLarge>
      </View>
      <View style={styles.txtOrContainer}>
        <Text style={styles.txtOr}>OR</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button.ButtonLarge
          onPress={() => console.warn('Facebook')}
          style={styles.btnLoginFaceBook}
          title="Login with Facebook"></Button.ButtonLarge>
      </View>
    </View>
  );
};

export default Login;
