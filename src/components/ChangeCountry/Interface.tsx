import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type Props = {
  changeToUS: () => void;
  changeToGB: () => void;
  newsCountry: string;
};

const Interface = ({ changeToUS, changeToGB, newsCountry }: Props) => {
  const selectedUS =
    newsCountry === 'us' ? styles.pickedCountry : styles.unPickedCountry;
  const selectedGB =
    newsCountry === 'gb' ? styles.pickedCountry : styles.unPickedCountry;

  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity onPress={changeToUS}>
        <Text style={selectedUS}>US</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeToGB}>
        <Text style={selectedGB}>GB</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Interface;
