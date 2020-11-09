import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import AppNavigator from './AppNavigator';
import { NewsContextProvider } from '~/context/NewsContext';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NewsContextProvider>
        <AppNavigator />
      </NewsContextProvider>
    </>
  );
};

export default App;
