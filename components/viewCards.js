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
      getCards({key}).then(data=> data.map(card=> console.log(card)))
}

  render(){
  console.log("state"+this.state.cards)
    return(
      <View>
        <Text>View Cards{this.state.cards}</Text>
      </View>
    )
  }
}
