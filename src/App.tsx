import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {CocktailFinder} from './screens/cocktail-finder';
import Home from './screens/home';
import {Provider} from 'react-redux';
import {store} from './store';
import Icon from 'react-native-vector-icons/Fontisto';
Icon.loadFont();
const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Home,
      CocktailFinder,
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
    },
  ),
);

export default () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
