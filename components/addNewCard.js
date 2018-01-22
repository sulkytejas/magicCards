import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Icon} from 'native-base';
import {addCardToDeck} from '../utils/api'

export default class AddNewCard extends React.Component{
  state={
    question:'',
    answer:''
   }

  onPressAddCard = () =>{
    const key = this.props.navigation.state.params.entryTitle
    const question = this.state.question
    const answer = this.state.answer
    const card = {
      question,answer
    }
    addCardToDeck({ key, card })

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
          <Text>{this.props.navigation.state.params.entryTitle}</Text>
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
