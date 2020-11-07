import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { ICONS } from '~/assets';

const styles = StyleSheet.create({
  imageStyle: {
    marginLeft: 10,
    width: 150,
    height: 35,
  },
});

const Interface = () => {
  return <Image source={ICONS.htecLogo} style={styles.imageStyle} />;
};

export default Interface;
