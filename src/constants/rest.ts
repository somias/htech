// export const API_ENDPOINT =
//   'http://newsapi.org/v2/top-headlines?' +
//   'country=us&' +
//   'apiKey=a946f39f76a14971899028ee24d07e53';

import { useContext } from 'react';
import { NewsContext } from '~/context/NewsContext';

const { country } = useContext(NewsContext);

export default Object.freeze({
  getNews: `http://newsapi.org/v2/top-headlines?country=us&apiKey=a946f39f76a14971899028ee24d07e53`,
});
