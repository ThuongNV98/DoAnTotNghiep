import React from 'react';
import {View, Text} from 'react-native';
import styles from './Body.style';

const Body = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Body;
