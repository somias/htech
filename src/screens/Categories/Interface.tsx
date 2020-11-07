import React from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';

import NewsCard from '~/components/NewsCard';

import { INewsProps, ICategory } from '~/config/types';

import styles from './styles';

interface Props {
  data?: ICategory[];
}

const renderItem = ({ item }: { item: INewsProps }) => {
  return (
    <NewsCard
      title={item.title}
      urlToImage={item.urlToImage}
      description={item.description}
      {...item}
    />
  );
};

const Interface = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      {props?.data?.map((item) => {
        return (
          <View>
            <Text style={styles.textCategory}>{item.categoryName}</Text>
            <FlatList
              data={item.data}
              renderItem={renderItem}
              horizontal={true}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Interface;
