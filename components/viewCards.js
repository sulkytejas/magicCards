import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {getCards} from '../utils/api'

export default class ViewCards extends React.Component{
  state={
     cards:[]
    }

  componentDidMount(){
      this.setState({refreshing: true});
      let key = this.props.navigation.state.params.entryTitle
      // getCards({key}).then(data=> console.log(data))
      getCards({key}).then(data=> this.setState({cards:data}))
}

  render(){
  console.log("state"+this.state.cards)
    return(
      <View>
        {this.state.cards.map((card,index)=>
          (
            <View key={index}>
            <Text> {card.question} </Text>
            <Text> {card.answer} </Text>
            </View>
          )
        )}
      </View>
    )
  }
}
