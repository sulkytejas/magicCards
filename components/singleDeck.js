import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import AddNewCard from './addNewCard'
import ViewCards from './viewCards'

export default class SingleDeck extends React.Component{
  state={ }

  render(){
   const entryTitle = this.props.navigation.state.params.entryID
   const count = this.props.navigation.state.params.countNo
    return(
      // <View>
      //   <Text>Single Deck - { entryTitle }- {count}</Text>
      //   <TouchableOpacity   onPress={() => this.props.navigation.navigate('AddNewCard',
      //   {'entryTitle':entryTitle}
      // )}>
      //     <Text>Add New Card</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity   onPress={() => this.props.navigation.navigate('ViewCards',
      //   {'entryTitle':entryTitle}
      // )}>
      //     <Text>View Cards</Text>
      //   </TouchableOpacity>
      // </View>

      <Container>

          <Text>{ entryTitle } ({count} cards)</Text>
          <Button style={{margin:20}} full success
            onPress={() => this.props.navigation.navigate('AddNewCard',
            {'entryTitle':entryTitle}
          )}
            >
            <Text>New Cards</Text>
          </Button>
          <Button style={{margin:20}} full danger
            onPress={() => this.props.navigation.navigate('ViewCards',
            {'entryTitle':entryTitle}
            )}
            >
           <Text>View Cards</Text>
         </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    paddingTop:20,
    paddingBottom:20,
  }
})
