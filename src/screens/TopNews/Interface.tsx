import React from 'react';
import { View, Text, FlatList } from 'react-native';

import NewsCard from '~/components/NewsCard';

// import type {NewsType} from '~/config/types'

import styles from './styles';

// type Props = {
//   data:{
//     articles: NewsType[]
//   }
// }

const renderItem = ({ item }: any) => (
  <NewsCard
    title={item.title}
    urlToImage={item.urlToImage}
    description={item.description}
  />
);

const Interface = (props: any) => {
  console.log('Props ==>>', props);
  return (
    <View style={styles.container}>
      <FlatList data={props.data.articles} renderItem={renderItem} />
    </View>
  );
};

export default Interface;
