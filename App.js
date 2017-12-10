import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './components/addDeck';
import ViewDeck from './components/viewDeck';
import { TabNavigator,StackNavigator } from 'react-navigation'

const Tabs = TabNavigator ({
  Home:{
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
