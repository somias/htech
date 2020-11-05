/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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
