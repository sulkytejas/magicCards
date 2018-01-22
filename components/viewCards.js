import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,Button } from 'native-base';
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
    let {cards} = this.state
    console.log(cards)
    return(
      // <View>
      //
      //   {cards.map((result,index)=>(
      //     <View key={index}>
      //       <Text>
      //          QUESTION: {result.question}
      //       </Text>
      //       <Text>
      //          Answer: {result.answer}
      //       </Text>
      //       <TouchableOpacity >
      //           <Text>Correct</Text>
      //       </TouchableOpacity>
      //       <TouchableOpacity >
      //           <Text>Wrong</Text>
      //       </TouchableOpacity>
      //     </View>
      //
      //   ))}
      //
      // </View>

      <Container>
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={this.state.cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }
            renderItem={ item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.question}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.answer}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
          </Button>
        </View>
      </Container>
    )
  }
}
