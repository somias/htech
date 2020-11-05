import { useState, useContext } from 'react';
import { NewsContext } from '~/context/NewsContext';

export default () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { data, setData, newsCountry } = useContext(NewsContext);

  const API = `http://newsapi.org/v2/top-headlines?country=${newsCountry}&apiKey=a946f39f76a14971899028ee24d07e53`;

  const getData = async () => {
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

  return { data, getData, loading, error };
};
