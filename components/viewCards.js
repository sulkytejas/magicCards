import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,Button,Spinner,Content } from 'native-base';
import {getCards} from '../utils/api'
import FlipCard from 'react-native-flip-card'

export default class ViewCards extends React.Component{
  state={
     cards:[],
     incrementCounter:0,
     decrementCounter:0,
     totalCount:0,
    }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.entryTitle,
  });

  componentDidMount(){
      let key = this.props.navigation.state.params.entryTitle
      getCards({key}).then(data=> this.setState({cards:data}))
    }

  handleClick(){
    let key = this.props.navigation.state.params.entryTitle
      this.props.navigation.navigate('ViewCards',{entryTitle:key})
  }
  goBack(){
    let key = this.props.navigation.state.params.entryTitle
      this.props.navigation.navigate('SingleDeck',{entryID:key})
  }

  Increment = (state) => {
    this.setState((state)=>{
      return {incrementCounter: state.incrementCounter + 1, totalCount:state.totalCount + 1}
    })
    this._deckSwiper._root.swipeLeft()
  }

  Decrement = (state) => {
    this.setState((state)=>{
      return {decrementCounter: state.decrementCounter + 1, totalCount:state.totalCount + 1}
    })
    this._deckSwiper._root.swipeLeft()
  }


  render(){
    let {cards} = this.state
    let key = this.props.navigation.state.params.entryTitle
    console.log(cards.length)
    if (cards.length > 0) {
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
              looping = {false}
              renderEmpty={() =>
                <View style={{ alignSelf: "center" }}>
                  <Text style={{alignSelf:'center',color:'#996300',marginTop:20}}>Correct Answers: {((this.state.incrementCounter)/this.state.totalCount)*100}% </Text>
                  <Button success full  style={{margin:20}} onPress={()=>this.handleClick()  }><Text>Restart</Text></Button>
                  <Button danger full onPress={() => this.goBack()} style={{margin:20}}><Text>Back</Text></Button>
                </View>
              }
              renderItem={ item =>
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Body>
                        <FlipCard
                          friction={6}
                          perspective={1000}
                          flipHorizontal={true}
                          flipVertical={false}
                          flip={false}
                          clickable={true}
                          onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                        >
                          {/* Face Side */}
                          <View >
                              <Text style={{ alignSelf: "center" }}>{item.question}</Text>
                              <Text style={{ alignSelf: "center" }}>(Click here for answer)</Text>
                          </View>
                          {/* Back Side */}
                          <View >
                            <Text>{item.answer}</Text>
                          </View>
                        </FlipCard>
                        <Button success full onPress={this.Increment} style={{margin:20}}><Text>Correct</Text></Button>
                        <Button danger full onPress={this.Decrement} style={{margin:20}}><Text>Incorrect</Text></Button>
                      </Body>
                    </Left>
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
    } else {
      return (
        <View>
        <Container>
            <Spinner color='red' />
            <Text style={{ alignSelf: "center" }}>No Cards</Text>
        </Container>
        </View>
      )
    }

  }
}
