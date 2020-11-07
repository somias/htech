import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { INewsProps } from '~/config/types';

const Interface = ({
  author,
  publishedAt,
  title,
  urlToImage,
  description,
  content,
  source,
}: INewsProps) => {
  const { navigate } = useNavigation();

  return (
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
        <TouchableOpacity
          onPress={() =>
            navigate('NewsDetails', {
              author,
              publishedAt,
              title,
              urlToImage,
              content,
              source,
            })
          }
        >
          <Text style={styles.descriptionMore}>More {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Interface;
