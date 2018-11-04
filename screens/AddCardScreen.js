import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
  } from 'react-native';

  export default class AddCardScreen extends React.Component{
      render(){
          return (
              <View>
                  <TextInput 
                        placeholder="Question" 
                  />
                  <TextInput 
                        placeholder="Answer" 
                  />
                  <TouchableOpacity>
                     <Text>Submit</Text>
                  </TouchableOpacity>
              </View>
          )
      }
  }

