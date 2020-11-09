import React, { useLayoutEffect, useEffect, useContext } from 'react';
import Interface from './Interface';

import LoadingSpinner from '~/components/LoadingSpinner';
import DisplayError from '~/components/DisplayError';

import { NewsContext } from '~/context/NewsContext';
import fetchSelectedCategory from '~/config/fetchSelectedCategory';

//TODO Write types for props here
export default (props: any) => {
  const { newsCountry } = useContext(NewsContext);
  const { getSelectedCategory, data, loading, error } = fetchSelectedCategory();

  //This function is to change screen title according to route param.
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: `${props.route.params.categoryName} News` || 'News',
    });
  }, [props.navigation]);

  useEffect(() => {
    getSelectedCategory(props.route.params.category);
  }, [props.route.params.category, newsCountry]);

  const newsData = data || [];

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <DisplayError error={error} />;
  }

  return <Interface data={newsData} />;
};
