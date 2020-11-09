import React from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import NewsCard from '~/components/NewsCard';

import { INewsProps, ICategory } from '~/config/types';

import styles from './styles';

interface Props {
  navigateToCategory: (category: string, categoryName: string) => void;
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
            <TouchableOpacity
              onPress={() =>
                props.navigateToCategory(item.category, item.categoryName)
              }
            >
              <Text style={styles.textCategory}>{item.categoryName}</Text>
            </TouchableOpacity>
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
