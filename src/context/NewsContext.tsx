import React, { createContext, useState, useContext } from 'react';

export const NewsContext = createContext({
  country: 'us',
  setCountry: (country: string) => {},
  // data: [],
  // setData: (data: any) => {},
});

type Props = {
  children: React.ReactNode;
};

export const NewsContextProvider = ({ children }: Props) => {
  const [country, setCountry] = useState<string>('us');
  // const [data, setData] = useState<any>([]);

  const value = {
    country,
    setCountry,
    // data,
    // setData,
  };

  return (
    <NewsContext.Provider value={value}> {children} </NewsContext.Provider>
  );
};
