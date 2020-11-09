import { useState, useContext } from 'react';
import { NewsContext } from '~/context/NewsContext';

import { INewsProps } from '~/config/types';

export default () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<INewsProps[]>([]);

  const { newsCountry } = useContext(NewsContext);

  const getSelectedCategory = async (category: string) => {
    const API = `http://newsapi.org/v2/top-headlines?country=${newsCountry}&category=${category}&apiKey=a946f39f76a14971899028ee24d07e53`;

    setLoading(true);

    try {
      const response = await fetch(API);
      const news = await response.json();

      if (news?.status === 'ok' && news?.articles.length) {
        setData(news.articles);
        setLoading(false);
      }
    } catch (error) {
      setError("Looks like we can't get any news for you");
      console.log('ERROR ==>>', error);
    }
  };

  return { data, getSelectedCategory, loading, error };
};
