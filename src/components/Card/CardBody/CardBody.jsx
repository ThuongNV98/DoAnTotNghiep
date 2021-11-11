import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './CardHeader.styles';
const CardBody = props => (
  <View style={[styles.cardBodyContainer, props.style]}>{props.children}</View>
);

CardBody.protoTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default {CardBody};
