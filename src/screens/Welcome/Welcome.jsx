import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './Welcome.style';
import ImageContant from '../../assets/styles';
const Welcome = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Onboarding')}
      style={styles.btnContainer}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={ImageContant.Image.BACKGROUND_START}>
        <View style={styles.imgContainer}>
          <Image source={ImageContant.Image.ellipse} />
          <View style={styles.iconTalk}>
            <Image source={ImageContant.Image.icon_talk} />
          </View>
          <View style={styles.imgContainerGirl}>
            <Image source={ImageContant.Image.iconGirl} />
          </View>
          <View style={styles.imgLogo}>
            <Image source={ImageContant.Image.logo} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Welcome;
