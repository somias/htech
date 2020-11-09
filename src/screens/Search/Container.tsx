import React, { useEffect, useContext, useState } from 'react';
import Interface from './Interface';

import DisplayError from '~/components/DisplayError';

import { NewsContext } from '~/context/NewsContext';

import fetchNewsFromSearch from '~/config/fetchNewsFromSearch';

//TODO Write types for props here
export default (props: any) => {
  const { newsCountry } = useContext(NewsContext);

  const [searchValue, setSearchValue] = useState<string>('');
  const { getSearchedNews, data, error } = fetchNewsFromSearch();

  useEffect(() => {
    getSearchedNews(searchValue);
  }, [newsCountry, searchValue]);

  const newsData = data || [];

  if (error) {
    return <DisplayError error={error} />;
  }

  return (
    <Interface
      data={newsData}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};
