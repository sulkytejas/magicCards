import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {fetchDecks} from '../utils/api'

export default class ViewDeck extends React.Component{
  componentDidMount(){
      fetchDecks().then((res)=> console.log(JSON.parse(res)))
  }
  render(){
    return(
      <View>
        <Text>View Deck</Text>
      </View>
    )

  }
}
