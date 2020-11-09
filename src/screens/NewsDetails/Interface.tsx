import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { useRoute } from '@react-navigation/native';
import type { RootRouteProp } from '~/config/types';

import styles from './styles';

type RouteProp = RootRouteProp<'NewsDetails'>;

const Interface = () => {
  const { params } = useRoute<RouteProp>();

  const date = new Date(params.publishedAt).toLocaleString();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.newsInfo}>
        <Text style={styles.newsInfoText} numberOfLines={1}>
          {params.author}
        </Text>
        <Text style={styles.newsInfoText}>{date}</Text>
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{params.title}</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: params.urlToImage,
          }}
        />
        <Text style={styles.imageSource}>
          Source: {params.source?.name}
        </Text>
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.content}>{params.content}</Text>
      </View>
    </ScrollView>
  );
};

export default Interface;
