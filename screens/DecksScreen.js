import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getDecks, getDeck, saveDeckTitle} from '../utils/helpers.js';
import DeckCard from '../components/DeckCard'
import { black } from 'ansi-colors';
import Events from '../utils/events'


export default class DecksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state= {
    added: this.props.navigation.getParam('added',false)
  }
  refresh = () => {
    this.setState({
      added: true
    })
  }
  componentDidMount(){
    this.refreshEvent = Events.subscribe('RefreshList', () => this.refresh());
  }
  componentWillUnmount(){
    this.refreshEvent.remove();
  }
  onReloadDecksScreen = () => {
    this.setState({
      added: true
    })
    console.log('trying to change the state value' + this.state.added)
  }

  getCards = () => {
    const plainObj = getDecks();
    const obj = Object.values(getDecks());
    const cards = obj.map(card => 
    <TouchableOpacity style={styles.deckContainer}
        onPress={()=>{this.props.navigation.navigate('IndividualDeckScreen',{title: card.title, onReloadDecksScreen: this.onReloadDecksScreen, isFromDecks: true }) }} 
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
  },
  deckContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da'
  }
});
