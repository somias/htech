import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import SearchInput from '~/components/SearchInput';
import NewsCard from '~/components/NewsCard';
import DisplayError from '~/components/DisplayError';

import { INewsProps } from '~/config/types';

import styles from './styles';

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
  data?: INewsProps[];
  error?: string;
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

const Interface = ({ searchValue, setSearchValue, data, error }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      {!error ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(_, index) => `key-${index.toString()}`}
        />
      ) : (
        <DisplayError error={error} />
      )}
    </SafeAreaView>
  );
};

export default Interface;
