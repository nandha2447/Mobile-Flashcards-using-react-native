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
          isCardAdded: false
      }
      handleSubmit = () => {
        const newObject = addCardToDeck('React',{question: 'Stupid', answer: 'Very Stupid'})
        console.log(newObject);
        this.setState({
            isCardAdded: true
        })
      }
      render(){
          return (
              <View>
                  <TextInput 
                        placeholder="Question" 
                  />
                  <TextInput 
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

