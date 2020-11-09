import React from 'react';
import { View, FlatList } from 'react-native';

import NewsCard from '~/components/NewsCard';

import { INewsProps } from '~/config/types';

import styles from './styles';

interface Props {
  data?: INewsProps[];
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
    <View style={styles.container}>
      <FlatList data={props.data} renderItem={renderItem} />
    </View>
  );
};

export default Interface;
