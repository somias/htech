import React, { useEffect, useState } from 'react';
import Interface from './Interface';

import fetchNews from '~/config/fetchNews';

export default () => {
  const { getData } = fetchNews();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://newsapi.org/v2/top-headlines?country=us&apiKey=a946f39f76a14971899028ee24d07e53'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
    //   .finally(() => setLoading(false));
  }, []);

  const newsData = data ? data : [];

  return <Interface data={newsData} />;
};
