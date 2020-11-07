import React from 'react';
import { Image } from 'react-native';

import { ICONS } from '~/assets';
import styles from './styles';

const Interface = () => {
  return <Image source={ICONS.htecLogo} style={styles.imageStyle} />;
};

export default Interface;
