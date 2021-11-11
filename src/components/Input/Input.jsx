import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Input.styles';
import PropTypes from 'prop-types';
import Colors from '../../assets/styles/Colors';
const Input = props => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, props.style]}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default Input;
