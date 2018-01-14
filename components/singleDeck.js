import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import AddNewCard from './addNewCard'
import ViewCards from './viewCards'

export default class SingleDeck extends React.Component{
  state={ }

  render(){
   const entryTitle = this.props.navigation.state.params.entryID
    return(
      <View>
        <Text>Single Deck - { entryTitle }</Text>
        <TouchableOpacity   onPress={() => this.props.navigation.navigate('AddNewCard',
        {'entryTitle':entryTitle}
      )}>
          <Text>Add New Card</Text>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => this.props.navigation.navigate('ViewCards',
        {'entryTitle':entryTitle}
      )}>
          <Text>View Cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
