import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {getCards} from '../utils/api'

export default class ViewCards extends React.Component{
  state={
    cards:[],

   }

  componentDidMount(){
      this.setState({refreshing: true});
      let key = this.props.navigation.state.params.entryTitle
      getCards({key}).then(data=> this.setState({cards:data}))
}

  render(){
    let {cards} = this.state
    return(
      <View>
        {cards.map((result,index)=>(
          <View key={index}>
            <Text>
               QUESTION: {result.question}
            </Text>
            <Text>
               Answer: {result.answer}
            </Text>
            <TouchableOpacity >
                <Text>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text>Wrong</Text>
            </TouchableOpacity>
          </View>

        ))}



      </View>
    )
  }
}
