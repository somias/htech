import React, { useEffect } from 'react';
import Interface from './Interface';
import LoadingSpinner from '~/components/LoadingSpinner';
import DisplayError from '~/components/DisplayError';

import fetchNewsTopCategories from '~/config/fetchNewsTopCategories';

export default () => {
  const { data, getNewsCategories, loading, error } = fetchNewsTopCategories();

  useEffect(() => {
    getNewsCategories();
  }, []);

  const newsData = data || [];

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <DisplayError error={error} />;
  }
  return <Interface data={newsData} />;
};
