import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default class QuizBackScreen extends React.Component{
    render(){
        return (
            <View>
                <Text>Answer</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('QuizFrontScreen')}}>
                    <Text>See Question</Text>
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