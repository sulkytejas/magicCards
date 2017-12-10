import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getDecks} from '../utils/api'

export default class ViewDeck extends React.Component{
  componentDidMount(){
      getDecks().then(a => console.log(a))
  }
  render(){
    return(
      <View>
        <Text>View Deck</Text>
      </View>
    )

  }
}
