import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import AddNewCard from './addNewCard'
import ViewCards from './viewCards'

export default class SingleDeck extends React.Component{
  state={ }

  render(){

    return(
      <View>
        <Text>Single Deck - {this.props.navigation.state.params.entryID}</Text>
        <TouchableOpacity   onPress={() => this.props.navigation.navigate('AddNewCard',)}>
          <Text>Add New Card</Text>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => this.props.navigation.navigate('ViewCards',)}>
          <Text>View Cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
