import React, { useEffect, useContext } from 'react';
import Interface from './Interface';
import LoadingSpinner from '~/components/LoadingSpinner';
import DisplayError from '~/components/DisplayError';

import { NewsContext } from '~/context/NewsContext';
import fetchNewsTopCategories from '~/config/fetchNewsTopCategories';

import { useNavigation } from '@react-navigation/native';

export default () => {
  const { newsCountry } = useContext(NewsContext);
  const { navigate } = useNavigation();

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

  const navigateToCategory = (category: string, categoryName: string) => {
    return navigate('SelectedCategory', { category, categoryName });
  };

  return <Interface data={newsData} navigateToCategory={navigateToCategory} />;
};
