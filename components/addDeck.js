import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import {submitDeck} from '../utils/api'

export default class AddDeck extends React.Component{
  state={
    title: ''
  }

  onPressAddDeck =()=>{
    const {title} = this.state
    const key = title;
    // const count = this.props.navigation.state.params.countNo
     const deck = {
      title: title,
      questions: []
    };
    submitDeck({key,deck})
    //this.props.navigation.goBack()
    this.props.navigation.navigate('SingleDeck',{'entryID':title, 'countNo':"0"})
    // this.props.navigation.navigate('SingleDeck', {entryTitle:key})
  }

  render(){
    return(
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      // }}>
      //   <Text>Add Deck</Text>
      //   <TextInput
      //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      //     onChangeText = {(value)=> this.setState({title: value})}
      //     editable ={true}
      //     value = {this.state.title}
      //   />
      // <TouchableOpacity onPress={()=> (this.onPressAddDeck())} >
      //     <Text>Submit</Text>
      // </TouchableOpacity>
      // </View>

      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Deck Name</Label>
              <Input
                onChangeText = {(value)=> this.setState({title: value})}
                editable ={true}
                value = {this.state.title}
              />

            </Item>
              <Button full danger onPress={()=> (this.onPressAddDeck())}>
                <Text> Submit</Text>
              </Button>
          </Form>
        </Content>
      </Container>
    )

  }
}
