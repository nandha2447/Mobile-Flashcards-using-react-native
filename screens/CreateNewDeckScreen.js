import React from 'react';
import { View, 
         StyleSheet, 
         TouchableOpacity,
         Text,
         TextInput,
       } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';
import {saveDeckTitle,getDecks} from '../utils/helpers'

export default class CreateNewDeckScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    newDeckTitle: ''
  }
  newDeckTitleChangedHandler = (val) => {
    this.setState({
      newDeckTitle: val
    })
  }
  createNewDeckHandler = () => {
    saveDeckTitle(this.state.newDeckTitle);
    this.setState({
      newDeckTitle: ''
    })
    this.props.navigation.navigate('DecksScreen', {added: true})
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text>What's the title of your new deck?</Text>
        <TextInput 
          value={this.state.newDeckTitle}
          onChangeText={this.newDeckTitleChangedHandler}
          placeholder="New title of the deck" 
        />
        <TouchableOpacity onPress={this.createNewDeckHandler}>
              <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
