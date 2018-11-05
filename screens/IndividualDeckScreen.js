import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {getDecks} from '../utils/helpers'

class IndividualDeckScreen extends React.Component{
    state = {
        isCardAdded: this.props.navigation.getParam('isCardAdded','false')
    }
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
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddCardScreen', {passedDownTitle: passedDownTitle})}}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('QuizFrontScreen')}}>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default IndividualDeckScreen