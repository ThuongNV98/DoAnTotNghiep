import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './HeaderTabs.styles';
const HeaderButton = props => (
  <TouchableOpacity
    onPress={() => props.setActiveTab(props.text)}
    style={[
      styles.btnHeader,
      props.style,
      {backgroundColor: props.activeTab === props.text ? 'black' : 'white'},
    ]}>
    <Text
      style={[
        styles.txtBtn,
        {color: props.activeTab === props.text ? 'white' : 'black'},
      ]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.headerTabContainer}>
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={styles.btnDelivery}
        text="Delivery"
      />
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={styles.btnPickup}
        text="Pickup"
      />
    </View>
  );
};

export default HeaderTabs;
