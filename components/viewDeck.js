import React from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Button } from 'native-base';
import {getDecks,getCards} from '../utils/api'
import SingleDeck from './singleDeck';

export default class ViewDeck extends React.Component{
  state={
    decks:[],
    refreshing: false,
    card:''
  }
  componentDidMount(){
      this.setState({refreshing: true});
      getDecks().then(data=>this.setState({decks:data}))
  }

  render(){
    const {decks} =this.state
    console.log(decks)
    return(
      // <View>
      //   <Text>View Deck</Text>
      //   {decks.map(a=>(
      //     <TouchableOpacity
      //       key = {a.title}
      //       onPress={() => this.props.navigation.navigate(
      //             'SingleDeck',
      //             {'entryID':a.title, 'countNo':a.count}
      //
      //     )}>
      //       <Text>{a.title} - {a.count} </Text>
      //
      //     </TouchableOpacity>
      //
      //   ))}
      // </View>
      <Container>
        <Content>
          {decks.map(a=>(
            <List key={a.title}>
              <ListItem  onPress={() => this.props.navigation.navigate(
                         'SingleDeck',
                         {'entryID':a.title, 'countNo':a.count})}>

                     <Text style={{color:'#996300'}}>
                         {a.title}
                     </Text>
                     <Text>({a.count} cards)</Text>
              </ListItem>
            </List>
          ))}
        </Content>
      </Container>
    )

  }
}
