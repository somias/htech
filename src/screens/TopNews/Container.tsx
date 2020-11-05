import React, { useEffect } from 'react';
import Interface from './Interface';
import LoadingSpinner from '~/components/LoadingSpinner';
import DisplayError from '~/components/DisplayError';

import fetchNews from '~/config/fetchNews';

export default () => {
  const { data, getData, loading, error } = fetchNews();

  useEffect(() => {
    getData();
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
