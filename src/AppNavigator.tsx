import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Screens
import TopNews from '~/screens/TopNews';
import Categories from '~/screens/Categories';
import Search from '~/screens/Search';
import NewsDetails from '~/screens/NewsDetails';

//Components
import OpenDrawer from '~/components/OpenDrawer';
import DrawerContent from '~/components/DrawerContent';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={({ navigation }) => ({
          title: 'HTECH News',
          headerRight: () => <OpenDrawer navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ title: 'News Details' }}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator>
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
        <Drawer.Navigator drawerContent={DrawerContent}>
          <Drawer.Screen name="Home" component={StackNavigation} />
        </Drawer.Navigator>
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
