import { useState, useContext } from 'react';
import { NewsContext } from '~/context/NewsContext';

import { INewsProps } from '~/config/types';

export default () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<INewsProps[]>([]);

  const { newsCountry } = useContext(NewsContext);

  const getSearchedNews = async (searchValue: string) => {
    const API = `http://newsapi.org/v2/top-headlines?country=${newsCountry}&q=${searchValue}&apiKey=f8229f0667e64aa1b71f2d34d40ab773`;

    if (!searchValue.length) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API);
      const news = await response.json();

      if (news?.status === 'ok' && news?.articles.length) {
        setData(news.articles);
        setLoading(false);
      }

      if (news?.status === 'ok' && !news?.articles.length) {
        setLoading(false);
        setError("Looks like we can't find what you were looking for");
      }
    } catch (error) {
      setError("Looks like we can't find what you were looking for");
      console.log('ERROR ==>>', error);
    }
  };

  return { data, getSearchedNews, loading, error };
};
