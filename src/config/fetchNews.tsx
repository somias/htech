import { useState, useContext } from 'react';
// import axios from 'axios';
import { NewsContext } from '~/context/NewsContext';
import REST from '~/constants/rest';

export default () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // const { data, setData } = useContext(NewsContext);

  const getData = async () => {
    try {
      const response = await fetch(REST.getNews);
      const news = await response.json();

      // if (response.ok) {
      //   setData(news);
      // }

      console.log('NEWS ===>>>', news);
    } catch (error) {
      console.log('ERROR ==>>', error);
    }
  };

  return { getData };
};
