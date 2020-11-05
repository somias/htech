import React, { createContext, useState } from 'react';

export const NewsContext = createContext({
  newsCountry: '',
  setNewsCountry: (country: string) => {},
  data: [],
  setData: (data: any) => {},
});

type Props = {
  children: React.ReactNode;
};

export const NewsContextProvider = ({ children }: Props) => {
  const [newsCountry, setNewsCountry] = useState<string>('us');
  const [data, setData] = useState<any>([]);

  const value = {
    newsCountry,
    setNewsCountry,
    data,
    setData,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
