import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './CardHeader.styles';
const CardHeader = props => (
  <View style={[styles.cardHeaderContainer, props.style]}>
    {props.children}
  </View>
);

CardHeader.protoTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default {CardHeader};
