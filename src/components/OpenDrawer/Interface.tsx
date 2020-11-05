import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import { ICONS } from '~/assets';

import styles from './styles';

const Interface = ({ navigation }: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Image source={ICONS.settings} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

export default Interface;
