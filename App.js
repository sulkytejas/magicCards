import React from 'react';
import { StyleSheet, Text, View,StatusBar, AsyncStorage } from 'react-native';
import AddDeck from './components/addDeck';
import ViewDeck from './components/viewDeck';
import SingleDeck from './components/singleDeck';
import ViewCards from './components/viewCards'
import AddNewCard from './components/addNewCard'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants, Notifications, Permissions } from 'expo'
import { TabNavigator,StackNavigator } from 'react-navigation'

const NOTIFICATION_KEY = "magicCards:Notification"

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'Forgot to play your cards!',
    body: "👋 don't forget to get quizzy today!",
    ios: {
      sound: true,
    },
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

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
    screen:Tabs,
    navigationOptions:{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'#089960'
      }
    }
  },
  SingleDeck:{
    screen:SingleDeck,
    navigationOptions:{
      title:"Deck",
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'#089960'
      }
    }
  },
  ViewCards:{
    screen:ViewCards,
    navigationOptions:{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'#089960'
      }
    }
  },
  AddNewCard:{
    screen:AddNewCard,
    navigationOptions:{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'#089960'
      }
    }
  },
  DeckHome:{
    screen:ViewDeck,
    navigationOptions:{
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'#089960'
      }
    }
  },
})

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
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
