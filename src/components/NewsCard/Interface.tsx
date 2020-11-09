import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { INewsProps } from '~/config/types';

import styles from './styles';

interface Props {
  onPress: () => void;
  data: INewsProps;
}

const Interface = ({
  onPress,
  data: { title, urlToImage, description },
}: Props) => (
  <View style={styles.container}>
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.imageWrapper}>
      <Image
        source={{
          uri: urlToImage,
        }}
        style={styles.imageStyle}
      />
    </View>
    <View style={styles.descriptionWrapper}>
      <Text style={styles.descriptionText}>{description}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.descriptionMore}>More {'>'}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Interface;
