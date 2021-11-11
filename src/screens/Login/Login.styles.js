import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../assets/styles/Colors';
const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  txtOrContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtOr: {
    fontSize: 20,
  },
  btnContainer: {
    alignItems: 'center',
  },
  btnLogin: {
    backgroundColor: Colors.ORANGE,
  },
  btnLoginFaceBook: {
    backgroundColor: Colors.BLUE_FACEBOOK,
  },
  txtForgetPasswordContainer: {
    width: '50%',
    padding: 13,
  },
  txtForgetPassword: {
    fontSize: 16,
    color: Colors.ORANGE,
    fontWeight: 'bold',
  },
});

export default styles;
