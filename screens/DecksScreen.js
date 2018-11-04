import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getDecks, getDeck, saveDeckTitle} from '../utils/helpers.js';
import DeckCard from '../components/DeckCard'


export default class DecksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  getCards = () => {
    const plainObj = getDecks();
    const obj = Object.values(getDecks());
    const cards = obj.map(card => 
    <TouchableOpacity 
        onPress={()=>{this.props.navigation.navigate('IndividualDeckScreen',{title: card.title }) }} 
        key={card.title}
    >
        <DeckCard title={card.title} length={plainObj[card.title].questions.length}></DeckCard>
    </TouchableOpacity>)
    
    return cards;
  }
  render() {
    return (
      <View style={styles.container}>
        {this.getCards()}
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
