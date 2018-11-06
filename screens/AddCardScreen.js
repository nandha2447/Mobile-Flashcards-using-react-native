import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
  } from 'react-native';
  import {addCardToDeck} from '../utils/helpers'

  export default class AddCardScreen extends React.Component{
      state={
          question: '',
          answer: ''
      }
      handleSubmit = () => {
        const passedDownTitle = this.props.navigation.getParam('passedDownTitle');
        const newObject = addCardToDeck(passedDownTitle,{question: this.state.question, answer: this.state.answer})
        console.log(newObject);
        this.props.navigation.navigate('IndividualDeckScreen',{isCardAdded: true})
      }
      changedQuestionHandler = (question) => {
        this.setState({
            question: question
        })
      }
      changedAnswerHandler = (answer) => {
        this.setState({
            answer: answer
        })
      }
      render(){
          return (
              <View>
                  <TextInput 
                        value={this.state.question}
                        onChangeText={this.changedQuestionHandler}
                        placeholder="Question" 
                  />
                  <TextInput 
                        value={this.state.answer}
                        onChangeText={this.changedAnswerHandler}
                        placeholder="Answer" 
                  />
                  <TouchableOpacity onPress={this.handleSubmit}>
                     <Text>Submit</Text>
                  </TouchableOpacity>
                  {this.state.isCardAdded && <Text>Card is added</Text>}
              </View>
          )
      }
  }

