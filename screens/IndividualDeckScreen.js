import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {getDecks,clearLocalNotification,setLocalNotification} from '../utils/helpers'
import Events from '../utils/events'

class IndividualDeckScreen extends React.Component{
    
    state = {
        isDeckAdded: this.props.navigation.getParam('isDeckAdded','false'),
        isCardAdded: this.props.navigation.getParam('isCardAdded','false'),
        isZero: false,
        isFromDecks: this.props.navigation.getParam('isCardAdded','false')
    }
    onStartQuizHandler = () => {
        const passedDownTitle = this.props.navigation.getParam('title','Category');
        const obj = Object.values(getDecks()).filter(card => card.title === passedDownTitle); 
        obj[0].questions.length !== 0 
                ? this.props.navigation.navigate('QuizFrontScreen', {passedDownTitle: passedDownTitle, isCardAdded: this.state.isCardAdded}) 
                : this.setState({ isZero : true})
        this.setState({
            isCardAdded: false
        })
        clearLocalNotification().then(setLocalNotification)

    }
    render(){
        const passedDownTitle = this.props.navigation.getParam('title','Category');
        const obj = Object.values(getDecks()).filter(card => card.title === passedDownTitle); 
        {this.props.navigation.getParam('isFromDecks') === true && this.props.navigation.getParam('onReloadDecksScreen')();}
        {this.state.isDeckAdded && Events.publish('RefreshList')}
            // console.log(this.state.isCardAdded + 'isCardAdded')
            // console.log(this.props.navigation.getParam('isCardAdded'))
        if(!this.state.isZero){
            return (
                <View>
                    <Text>{passedDownTitle}</Text>
                    <Text>{
                        obj[0].questions.length
                    } cards</Text>
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
            </View>
        )
    }
}


export default IndividualDeckScreen