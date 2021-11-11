import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../assets/styles';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Colors.BACKGROUND_ONBOARDING,
  },
  slideContainer: {
    alignItems: 'center',
    backgroundColor: Colors.Colors.BACKGROUND_ONBOARDING,
  },
  slideImage: {
    resizeMode: 'contain',
    height: height / 1,
    width: width * 0.95,
  },
  title: {
    color: Colors.Colors.WHITE,
  },
  subTitle: {
    color: Colors.Colors.WHITE,
  },
  /*----------- Footer -----------*/
  footerContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: Colors.Colors.WHITE,
    marginHorizontal: 3,
    borderRadius: 10,
    marginBottom: 20,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
