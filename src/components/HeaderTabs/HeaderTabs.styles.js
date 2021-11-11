import React from 'react';
import {StyleSheet} from 'react-native';
import Styles from '../../assets/styles';
const styles = StyleSheet.create({
  headerTabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnHeader: {
    backgroundColor: Styles.Colors.RED,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 10,
  },
  txtBtn: {
    fontSize: Styles.FontSize.fS18,
    fontWeight: 'bold',
    color: 'white',
  },
  btnDelivery: {},
  btnPickup: {},
});

export default styles;
