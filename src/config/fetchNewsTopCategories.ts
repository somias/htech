import { useState, useContext } from 'react';
import { NewsContext } from '~/context/NewsContext';
import { ICategory } from '~/config/types';

export default () => {
  const { newsCountry } = useContext(NewsContext);

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [data, setData] = useState<ICategory[]>([]);

  const getNewsCategories = async () => {
    let categoryData = [
      { category: 'general', categoryName: 'General', data: [] },
      { category: 'business', categoryName: 'Business', data: [] },
      { category: 'sports', categoryName: 'Sports', data: [] },
      { category: 'entertainment', categoryName: 'Entertainment', data: [] },
      { category: 'technology', categoryName: 'Technology', data: [] },
    ];

    let newArray = [];

    try {
      newArray = await Promise.all(
        categoryData.map(async (item) => {
          const API = `http://newsapi.org/v2/top-headlines?country=${newsCountry}&category=${item.category}&pageSize=5&apiKey=a946f39f76a14971899028ee24d07e53`;

          const response = await fetch(API);
          const newsData = await response.json();

          if (newsData?.status === 'ok' && newsData?.articles.length) {
            item.data = newsData.articles;
          }

          return item;
        })
      );

      setLoading(false);
      setData(newArray);
    } catch (error) {
      setError("Looks like we can't get any news for you");
      console.log('ERROR ==>>', error);
    }
  };

  return { data, loading, error, getNewsCategories };
};
