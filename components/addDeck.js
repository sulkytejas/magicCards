import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,TouchableOpacity } from 'react-native';
import {submitDeck} from '../utils/api'

export default class AddDeck extends React.Component{
  state={
    title: 'Useless Placeholder'
  }

  onPressAddDeck =()=>{
    const {title} = this.state
    const key = title;
     const deck = {
      title: title,
      questions: []
    };
    submitDeck({key,deck})
    this.props.navigation.navigate('ViewDeck', {deck: title})
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
          onChangeText = {(value)=> this.setState({title: value})}
          editable ={true}
          value = {this.state.title}
        />
      <TouchableOpacity onPress={this.onPressAddDeck} >
          <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    )

  }
}
