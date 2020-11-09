import React, { useEffect, useContext, useState } from 'react';
import Interface from './Interface';

import { NewsContext } from '~/context/NewsContext';

import fetchNewsFromSearch from '~/config/fetchNewsFromSearch';

export default () => {
  const { newsCountry } = useContext(NewsContext);

  const [searchValue, setSearchValue] = useState<string>('');
  const { getSearchedNews, data, error } = fetchNewsFromSearch();

  useEffect(() => {
    getSearchedNews(searchValue);
  }, [newsCountry, searchValue]);

  const newsData = data || [];

  return (
    <Interface
      data={newsData}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      error={error}
    />
  );
};
