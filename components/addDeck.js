import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity } from 'react-native';
import {submitDeck} from '../utils/api'

export default class AddDeck extends React.Component{
  state={
    text: 'Useless Placeholder'
  }

  onPressAddDeck =()=>{
    const {text} =  this.state
    submitDeck({text})
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
          onChangeText = {(value)=> this.setState({text: value})}
          editable ={true}
          value = {this.state.text}
        />
      <TouchableOpacity onPress={this.onPressAddDeck} >
          <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    )

  }
}
