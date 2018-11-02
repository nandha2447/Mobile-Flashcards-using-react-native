import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {getDecks, getDeck} from '../utils/helpers.js';

export default class DecksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    console.log('object' + getDecks());
    return (
      <View style={styles.container}>
        <Text>Checking getDecks() method    {getDecks().JavaScript.title}</Text>
        <Text>Checking getDeck(id) method  {getDeck('React').title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
