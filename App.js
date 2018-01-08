import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './components/addDeck';
import ViewDeck from './components/viewDeck';
import SingleDeck from './components/singleDeck';
import ViewCards from './components/viewCards'
import AddNewCard from './components/addNewCard'

import { TabNavigator,StackNavigator } from 'react-navigation'


const Tabs = TabNavigator ({
  ViewDeck:{
    screen: ViewDeck,
    navigationOptions:{
      title: 'View Deck'
    }
  },
  AddDeck:{
    screen:AddDeck,
    navigationOptions:{
      title: 'Add Deck'
    }
  }
})

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
  ViewDeck:{
    screen:ViewDeck
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
