import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity } from 'react-native';
import {submitDeck} from '../utils/api'

export default class AddDeck extends React.Component{
  state={
    deck: 'Useless Placeholder'
  }

  onPressAddDeck =()=>{
    const key = '_' + Math.random().toString(36).substr(2, 9);

    const {deck} =  this.state
    console.log(deck)
    submitDeck({key,deck})
    alert('done')
  }

  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Text>Add Deck</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {(value)=> this.setState({deck: value})}
          editable ={true}
          value = {this.state.deck}
        />
      <TouchableOpacity onPress={this.onPressAddDeck} >
          <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    )

  }
}
