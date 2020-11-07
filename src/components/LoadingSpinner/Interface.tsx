import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { COLORS } from '~/assets';
import styles from './styles';

const Interface = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.appColor} />
    </View>
  );
};

export default Interface;
