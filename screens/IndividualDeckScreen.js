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
        isCardAdded: this.props.navigation.getParam('isCardAdded','false'),
        isZero: false
    }
    onStartQuizHandler = () => {
        const passedDownTitle = this.props.navigation.getParam('title','Category');
        const obj = Object.values(getDecks()).filter(card => card.title === passedDownTitle); 
        obj[0].questions.length !== 0 ? 
                    this.props.navigation.navigate('QuizFrontScreen', {passedDownTitle: passedDownTitle}) : this.setState({ isZero : true})
    }
    render(){
        const passedDownTitle = this.props.navigation.getParam('title','Category');
        const obj = Object.values(getDecks()).filter(card => card.title === passedDownTitle); 
        {this.props.navigation.getParam('isCardAdded') === true && this.props.navigation.getParam('onReloadDecksScreen')();}
            // console.log(this.state.isCardAdded + 'isCardAdded')
            // console.log(this.props.navigation.getParam('isCardAdded'))
        if(!this.state.isZero){
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
                    <TouchableOpacity onPress={this.onStartQuizHandler}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return(
            <View>
                <Text>You don't have any cards to quiz yourself.</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddCardScreen', {passedDownTitle: passedDownTitle})}}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}


export default IndividualDeckScreen