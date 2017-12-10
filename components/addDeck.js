import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity } from 'react-native';
import {submitDeck} from '../utils/api'

export default class AddDeck extends React.Component{
  state={
    text: 'Useless Placeholder'
  }

  timeToString= () => {
  const time = Date.now()
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

  onPressAddDeck =()=>{
    const key = 1;
    const {text} =  this.state
    submitDeck({key,text})
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
