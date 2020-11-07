import React from 'react';
import Interface from './Interface';

import { useNavigation } from '@react-navigation/native';

import { INewsProps } from '~/config/types';

export default (props: INewsProps) => {
  const { navigate } = useNavigation();
  const { author, publishedAt, title, urlToImage, content, source } = props;

  const onPress = () =>
    navigate('NewsDetails', {
      author,
      publishedAt,
      title,
      urlToImage,
      content,
      source,
    });

  return <Interface onPress={onPress} data={props} />;
};
