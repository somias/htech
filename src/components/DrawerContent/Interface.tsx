import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const Interface = () => {
  return (
    <View style={styles.container}>
      <Text>Choose your news country</Text>
      <View style={styles.buttonWrapper}>
        <Button title="US" onPress={() => {}} />
        <Button title="GB" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Interface;
