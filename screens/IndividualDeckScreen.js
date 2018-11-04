import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {getDecks} from '../utils/helpers'

class IndividualDeckScreen extends React.Component{
    render(){
        const passedDownTitle = this.props.navigation.getParam('title','Category');
        const obj = Object.values(getDecks()).filter(card => card.title === passedDownTitle); 
        return (
            <View>
                <Text>Individual deck screen</Text>
                <Text>{passedDownTitle}</Text>
                <Text>{
                    obj[0].questions.length
                }</Text>
                <TouchableOpacity>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default IndividualDeckScreen