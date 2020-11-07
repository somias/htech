import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens
import TopNews from '~/screens/TopNews';
import Categories from '~/screens/Categories';
import Search from '~/screens/Search';
import NewsDetails from '~/screens/NewsDetails';

//Components
import HtecLogo from '~/components/HtecLogo';
import ChangeCountry from '~/components/ChangeCountry';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

import { COLORS } from '~/assets';

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: { backgroundColor: COLORS.appColor },
      }}
    >
      <Tab.Screen
        name="TopNews"
        component={TopNews}
        options={{ title: 'Top News' }}
      />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

//Main App Navigation
const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={() => ({
              title: '',
              headerLeft: () => <HtecLogo />,
              headerRight: () => <ChangeCountry />,
            })}
          />
          <Stack.Screen
            name="NewsDetails"
            component={NewsDetails}
            options={{ title: 'News Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default AppNavigator;
