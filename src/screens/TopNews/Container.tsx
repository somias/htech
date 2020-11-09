import React, { useEffect, useContext } from 'react';
import Interface from './Interface';

import LoadingSpinner from '~/components/LoadingSpinner';
import DisplayError from '~/components/DisplayError';

import { NewsContext } from '~/context/NewsContext';
import fetchNews from '~/config/fetchNews';

export default () => {
  const { newsCountry } = useContext(NewsContext);
  const { data, getData, loading, error } = fetchNews();

  useEffect(() => {
    getData();
  }, [newsCountry]);

  const newsData = data || [];

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <DisplayError error={error} />;
  }

  return <Interface data={newsData} />;
};
