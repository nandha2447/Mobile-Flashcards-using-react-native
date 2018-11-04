import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import CreateNewDeckScreen from '../screens/CreateNewDeckScreen';
import DecksScreen from '../screens/DecksScreen';
import IndividualDeckScreen from '../screens/IndividualDeckScreen'
import AddCardScreen from '../screens/AddCardScreen'
import QuizFrontScreen from '../screens/QuizFrontScreen'
import QuizBackScreen from '../screens/QuizBackScreen'
//import SettingsScreen from '../screens/SettingsScreen';

const CreateNewDeckStack = createStackNavigator({
  CreateNewDeckScreen: {
    screen: CreateNewDeckScreen, 
  }
});

CreateNewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck',
};

const DecksStack = createStackNavigator({
  DecksScreen: {
    screen: DecksScreen,
  },
  IndividualDeckScreen: {
    screen:  IndividualDeckScreen
  },
  AddCardScreen: {
    screen: AddCardScreen
  },
  QuizFrontScreen: {
    screen: QuizFrontScreen
  },
  QuizBackScreen: {
    screen: QuizBackScreen
  }
});

DecksStack.navigationOptions = {
  tabBarLabel: 'Decks',
};

export default createMaterialTopTabNavigator({
  DecksStack,
  CreateNewDeckStack,
});
