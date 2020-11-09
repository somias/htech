import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { ICONS } from '~/assets';
import styles from './styles';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Interface = ({ searchValue, setSearchValue }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Image source={ICONS.search} style={styles.iconStyle} />
        <TextInput
          style={styles.textInput}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Search for news"
        />
      </View>
    </View>
  );
};

export default Interface;
