import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';

const Interface = (props: any) => {
  const date = new Date(props.route.params.publishedAt).toLocaleString();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.newsInfo}>
        <Text style={styles.newsInfoText} numberOfLines={1}>
          {props.route.params.author}
        </Text>
        <Text style={styles.newsInfoText}>{date}</Text>
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{props.route.params.title}</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: props.route.params.urlToImage,
          }}
        />
        <Text style={styles.imageSource}>
          Source: {props.route.params.source.name}
        </Text>
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.content}>{props.route.params.content}</Text>
      </View>
    </ScrollView>
  );
};

export default Interface;
