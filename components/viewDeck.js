import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {getDecks} from '../utils/api'
import SingleDeck from './singleDeck';

export default class ViewDeck extends React.Component{
  state={
    decks:[],
    refreshing: false,
  }
  componentDidMount(){
      this.setState({refreshing: true});
      getDecks().then(data=>this.setState({decks:data}))
  }

  render(){
    const {decks} =this.state
    console.log(decks)
    return(
      <View>
        <Text>View Deck</Text>
        {decks.map(a=>(
          <TouchableOpacity
            key = {a.title}
            onPress={() => this.props.navigation.navigate(
                  'SingleDeck',
                  {'entryID':a.title}
          )}>
            <Text >{a.title}</Text>
          </TouchableOpacity>

        ))}
      </View>
    )

  }
}
