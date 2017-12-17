import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {addCardToDeck} from '../utils/api'
import SingleDeck from './singleDeck';

export default class ViewDeck extends React.Component{
  state={
    decks:[]
  }
  componentDidMount(){
      addCardToDeck().then(data=>this.setState({decks:data}))


  }
  render(){
    const {decks} =this.state
    console.log(decks)
    return(
      <View>
        <Text>View Deck</Text>
        {decks.map(a=>(
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
                  'SingleDeck',
                  {'entryID':a.key}
          )}>
            <Text key={a.key}>{a}</Text>
          </TouchableOpacity>

        ))}
      </View>
    )

  }
}
