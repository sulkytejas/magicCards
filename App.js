import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import AddDeck from './components/addDeck';
import ViewDeck from './components/viewDeck';
import SingleDeck from './components/singleDeck';
import ViewCards from './components/viewCards'
import AddNewCard from './components/addNewCard'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { TabNavigator,StackNavigator } from 'react-navigation'

function MagicStatusBar({backgroundColor, ...props}){
  return (
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator ({
  ViewDeck:{
    screen: ViewDeck,
    navigationOptions:{
      title: 'View Decks',
      tabBarIcon:() => <Ionicons name='md-list' size={30}  color='#fff'/>
    }
  },
  AddDeck:{
    screen:AddDeck,
    navigationOptions:{
      title: 'Add Deck',
      tabBarIcon:() => <Ionicons name='ios-add-circle' size={30}  color='#fff'/>
    }
  }
},
{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor:  '#fff',
    style: {
      height: 56,
      backgroundColor:  '#089960',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
}
)

const MainNavigator = StackNavigator({
  Home:{
    screen:Tabs
  },
  SingleDeck:{
    screen:SingleDeck
  },
  ViewCards:{
    screen:ViewCards
  },
  AddNewCard:{
    screen:AddNewCard
  },
  DeckHome:{
    screen:ViewDeck
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MagicStatusBar backgroundColor='#089960' barStyle='light-content'/>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
