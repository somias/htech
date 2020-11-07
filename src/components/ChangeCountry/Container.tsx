import React, { useContext } from 'react';
import Interface from './Interface';
import { NewsContext } from '~/context/NewsContext';

export default () => {
  const { setNewsCountry, newsCountry } = useContext(NewsContext);

  const changeToUS = () => setNewsCountry('us');
  const changeToGB = () => setNewsCountry('gb');

  return (
    <Interface
      changeToUS={changeToUS}
      changeToGB={changeToGB}
      newsCountry={newsCountry}
    />
  );
};
