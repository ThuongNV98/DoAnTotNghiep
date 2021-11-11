import React from 'react';
import {StyleSheet} from 'react-native';
import Styles from '../../assets/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: Styles.FontSize.fS30,
    color: Styles.Colors.ORANGE,
  },
  btnSignUp: {
    backgroundColor: Styles.Colors.ORANGE,
  },
});

export default styles;
