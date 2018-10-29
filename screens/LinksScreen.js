import React from 'react';
import { ScrollView, 
         StyleSheet, 
         TouchableOpacity,
         Text,
         TextInput
       } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text>What's the title of your new deck?</Text>
        <TextInput 
          placeholder="New title of the deck" 
        />
        <TouchableOpacity>
              <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
