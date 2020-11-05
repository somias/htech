import React from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

// import type {NewsType} from '~/config/types'
import type  { NewsType } from '~/config/types';


const Interface = ({ title, urlToImage, description }: any) => {
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
        <Text
          style={styles.descriptionMore}
          onPress={() => navigate('NewsDetails')}
        >
          More {'>'}
        </Text>
      </View>
    </View>
  );
};

export default Interface;
