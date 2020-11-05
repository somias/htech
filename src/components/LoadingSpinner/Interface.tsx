import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Interface = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#008cff" />
    </View>
  );
};

export default Interface;
