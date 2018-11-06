import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import {getDeck} from '../utils/helpers'

export default class QuizFrontScreen extends React.Component{
    state = {
        isQuestion: true,
        questions: [],
        questionIndex: 0,
        isCardAdded: this.props.navigation.getParam('isCardAdded','false')
    }
    componentWillMount(){
        const passedDownTitle = this.props.navigation.getParam('passedDownTitle');
        this.setState({
            questions: Object.values(getDeck(passedDownTitle))[1]
        })
    }
    render(){
        const {isQuestion, questions, questionIndex} = this.state
        const passedDownTitle = this.props.navigation.getParam('passedDownTitle');
        const lengthOfCards = Object.values(getDeck(passedDownTitle))[1].length;
        if(lengthOfCards !== 0 && lengthOfCards > questionIndex ) {
            return(
                <View>
                    <Text>{questionIndex + 1} / {lengthOfCards}</Text>
                    <Text>{
                        isQuestion && questions ? JSON.stringify(questions[questionIndex].question)
                                : JSON.stringify(questions[questionIndex].answer)
                        }
                    </Text>
                    <TouchableOpacity onPress={()=>{this.setState({isQuestion: !isQuestion})}}>
                        <Text>See {this.state.isQuestion ? 'Answer' : 'Question'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({
                        questionIndex: questionIndex + 1,
                        isQuestion: true
                    })}}>
                        <Text>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({
                        questionIndex: questionIndex + 1,
                        isQuestion: true
                    })}}>
                        <Text>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View>
                <Text>There are no more cards left in this deck</Text>
            </View>
        )
    }
}