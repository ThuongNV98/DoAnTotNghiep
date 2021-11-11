import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    position: 'absolute',
  },
  imgContainerGirl: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    paddingBottom: 270,
    paddingRight: 80,
  },
  iconTalk: {
    position: 'absolute',
    paddingTop: 100,
    paddingRight: 120,
  },
});

export default styles;
