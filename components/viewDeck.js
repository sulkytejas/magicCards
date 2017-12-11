import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getDecks} from '../utils/api'

export default class ViewDeck extends React.Component{
  state={
    decks:[]
  }
  componentDidMount(){
      getDecks().then(a => this.setState({decks:a}))
  }
  render(){
    const {decks} =this.state
    console.log(decks)
    return(
      <View>
        <Text>View Deck</Text>
        {decks.map(a=>(
          <Text key={a.key}>{a}</Text>
        ))}
      </View>
    )

  }
}
