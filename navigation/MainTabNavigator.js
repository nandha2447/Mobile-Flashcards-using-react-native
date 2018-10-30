import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import CreateNewDeckScreen from '../screens/CreateNewDeckScreen';
import DecksScreen from '../screens/DecksScreen';
//import SettingsScreen from '../screens/SettingsScreen';

const CreateNewDeckStack = createStackNavigator({
  Home: CreateNewDeckScreen,
});

CreateNewDeckStack.navigationOptions = {
  tabBarLabel: 'Decks',
};

const DecksStack = createStackNavigator({
  Links: DecksScreen,
});

DecksStack.navigationOptions = {
  tabBarLabel: 'New Deck',
};

export default createMaterialTopTabNavigator({
  DecksStack,
  CreateNewDeckStack,
});
