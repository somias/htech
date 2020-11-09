import { useState, useContext } from 'react';
import { NewsContext } from '~/context/NewsContext';

import { INewsProps } from '~/config/types';

export default () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<INewsProps[]>([]);

  const { newsCountry } = useContext(NewsContext);

  const getSelectedCategory = async (category: string) => {
    const API = `http://newsapi.org/v2/top-headlines?country=${newsCountry}&category=${category}&apiKey=f8229f0667e64aa1b71f2d34d40ab773`;

    setLoading(true);

    try {
      const response = await fetch(API);
      const news = await response.json();

      if (news?.status === 'ok' && news?.articles.length) {
        setData(news.articles);
        setLoading(false);
        setError('');
      }
    } catch (error) {
      setError("Looks like we can't get any news for you");
      console.log('ERROR ==>>', error);
    }
  };

  return { data, getSelectedCategory, loading, error };
};
