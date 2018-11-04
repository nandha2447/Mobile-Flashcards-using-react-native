import React from 'react'
import {View, Text} from 'react-native'

const DeckCard = (props) => (
    <View>
        <Text>{props.title}</Text>
        <Text>{props.length}</Text>
    </View>
)

export default DeckCard;