import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import {addCardToDeck} from '../utils/api'

export default class AddNewCard extends React.Component{
  state={
    question:'',
    answer:''
   }

  onPressAddCard = () =>{
    const key = this.props.navigation.state.params.entryTitle
    const question = this.state.question
    const answer = this.state.answer
    const card = {
      question,answer
    }
    addCardToDeck({ key, card })
    
  }

  render(){

    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Text>Add New Card: </Text>
        <Text>{this.props.navigation.state.params.entryTitle}</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {(value)=> this.setState({question: value})}
          editable ={true}
          value = {this.state.title}
        />
        <Text>answer is</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {(value)=> this.setState({answer: value})}
          editable ={true}
          value = {this.state.title}
        />
      <TouchableOpacity onPress = {this.onPressAddCard} >
          <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
