import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

type Props = {
  error: string;
};

const Interface = ({ error }: Props) => (
  <View style={styles.container}>
    <Text style={styles.errorMessage}>{error}</Text>
  </View>
);

export default Interface;
