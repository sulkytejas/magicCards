import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Icon} from 'native-base';
import {addCardToDeck} from '../utils/api'

export default class AddNewCard extends React.Component{
  state={
    question:'',
    answer:''
   }

   static navigationOptions = ({ navigation }) => ({
     title: navigation.state.params.entryTitle,
   });

  onPressAddCard = () =>{
    const key = this.props.navigation.state.params.entryTitle
    const count = this.props.navigation.state.params.countNo
    console.log("the count is" + count)
    const question = this.state.question
    const answer = this.state.answer
    const card = {
      question,answer
    }
    addCardToDeck({ key, card })
    //this.props.navigation.goBack()
    this.props.navigation.navigate('SingleDeck',{entryID:key,'countNo':count+1})
  }

  render(){

    return(
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      // }}>
      //   <Text>Add New Card: </Text>
      //   <Text>{this.props.navigation.state.params.entryTitle}</Text>
      //   <TextInput
      //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      //     onChangeText = {(value)=> this.setState({question: value})}
      //     editable ={true}
      //     value = {this.state.title}
      //   />
      //   <Text>answer is</Text>
      //   <TextInput
      //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      //     onChangeText = {(value)=> this.setState({answer: value})}
      //     editable ={true}
      //     value = {this.state.title}
      //   />
      // <TouchableOpacity onPress = {this.onPressAddCard} >
      //     <Text>Submit</Text>
      // </TouchableOpacity>
      // </View>

      <Container>
        <Content>
          <Form>
            <Item floatingLabel >
              <Label>Question</Label>
              <Input
                onChangeText = {(value)=> this.setState({question: value})}
                editable ={true}
                value = {this.state.title}
              />
            </Item>
            <Item floatingLabel>
              <Label>Answer</Label>
              <Input onChangeText = {(value)=> this.setState({answer: value})}
              editable ={true}
              value = {this.state.title}/>
            </Item>
            <Button onPress = {this.onPressAddCard} full danger>
                <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
