import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';

export default class AddNewCard extends React.Component{
  state={
    question:'',
   }

  render(){

    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Text>Add New Card</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {(value)=> this.setState({question: value})}
          editable ={true}
          value = {this.state.title}
        />
      <TouchableOpacity  >
          <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
