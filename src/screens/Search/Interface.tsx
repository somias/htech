import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import SearchInput from '~/components/SearchInput';
import NewsCard from '~/components/NewsCard';

import { INewsProps } from '~/config/types';

import styles from './styles';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
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

const Interface = ({ searchValue, setSearchValue, data }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `key-${index.toString()}`}
      />
    </SafeAreaView>
  );
};

export default Interface;
