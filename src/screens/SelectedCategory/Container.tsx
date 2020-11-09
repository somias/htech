import React, { useLayoutEffect, useEffect, useContext } from 'react';
import Interface from './Interface';

import LoadingSpinner from '~/components/LoadingSpinner';
import DisplayError from '~/components/DisplayError';

import { NewsContext } from '~/context/NewsContext';
import fetchSelectedCategory from '~/config/fetchSelectedCategory';

import { useNavigation, useRoute } from '@react-navigation/native';
import { SimpleNavigationProp } from '~/config/types';

import type { RootRouteProp } from '~/config/types';

type RouteProp = RootRouteProp<'SelectedCategory'>;

export default () => {
  const { newsCountry } = useContext(NewsContext);
  const { getSelectedCategory, data, loading, error } = fetchSelectedCategory();

  const navigation = useNavigation<SimpleNavigationProp>();
  const {params} =  useRoute<RouteProp>()

  //This function is to change screen title according to route param.
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${params.categoryName} News` || 'News',
    });
  }, [navigation]);

  useEffect(() => {
    getSelectedCategory(params.category);
  }, [params.category, newsCountry]);

  const newsData = data || [];

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <DisplayError error={error} />;
  }

  return <Interface data={newsData} />;
};
