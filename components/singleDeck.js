import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import AddNewCard from './addNewCard'
import ViewCards from './viewCards'
import {setLocalNotification,clearLocalNotification} from '../App'

export default class SingleDeck extends React.Component{
  state={ }

    // static navigationOptions = ({navigation}) => {
    //   const entryTitle = .navigation.state.params.entryID
    //
    //   return{
    //     title: "entryTitle",
    //   }
    // // }

    ViewCards({}){
      const entryTitle = this.props.navigation.state.params.entryID
      this.props.navigation.navigate('ViewCards',
      {'entryTitle':entryTitle})

      clearLocalNotification()
        .then(setLocalNotification)
    }

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

          <Text style={{alignSelf:'center',color:'#996300',marginTop:20}} >{ entryTitle }</Text>
          <Button style={{margin:20}} full success
            onPress={() => this.props.navigation.navigate('AddNewCard',
            {'entryTitle':entryTitle}
          )}
            >
            <Text>Add New Card</Text>
          </Button>
          <Button style={{margin:20}} full danger
            onPress={() => this.ViewCards()
            }
            >
           <Text>Start Quiz</Text>
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
