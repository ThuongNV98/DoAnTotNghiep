import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const ButtonLarge = props => (
  <TouchableOpacity
    style={[styles.btnComon, props.style]}
    onPress={props.onPress}
    activeOpacity={0.7}>
    <Text style={[styles.txtComon, styles.btnTxtLarge]}>{props.title}</Text>
  </TouchableOpacity>
);

const ButtonMedium = props => {
  <TouchableOpacity
    style={[styles.btnComon, styles.btnMedium]}
    onPress={props.onPress}
    activeOpacity={0.7}>
    <Text style={[styles.txtComon, styles.btnMedium]}>{props.title}</Text>
  </TouchableOpacity>;
};

ButtonLarge.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

ButtonMedium.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default {
  ButtonLarge,
  ButtonMedium,
};
