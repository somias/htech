import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { ICONS } from '~/assets';
import styles from './styles';

type Props = {
  onPress: () => {};
};

const Interface = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={ICONS.settings} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

export default Interface;
