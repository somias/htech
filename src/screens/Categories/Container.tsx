import React, { useEffect, useContext } from 'react';
import Interface from './Interface';
import LoadingSpinner from '~/components/LoadingSpinner';
import DisplayError from '~/components/DisplayError';

import { NewsContext } from '~/context/NewsContext';
import fetchNewsTopCategories from '~/config/fetchNewsTopCategories';

export default () => {
  const { newsCountry } = useContext(NewsContext);

  const { data, getNewsCategories, loading, error } = fetchNewsTopCategories();

  useEffect(() => {
    getNewsCategories();
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
