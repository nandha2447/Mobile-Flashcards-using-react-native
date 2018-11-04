import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import {getDecks} from '../utils/helpers'

export default class QuizFrontScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Question</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('QuizBackScreen')}}>
                    <Text>See Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}