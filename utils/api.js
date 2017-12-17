import {AsyncStorage} from 'react-native'

const FLASHCARDS_STORAGE_KEY = "MagicCards:cards"

export function getDecks()
{
  
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      let data = JSON.parse(results);
      if (!data) {return []}
      let keys = Object.keys(data);
      let decks = keys.map(function (item) {
        console.log(item)
        let deck = data[item];
        deck.title = item;
        return deck;
       });

       return decks;
      // let questions = [...data[key].questions, card]
      // console.log(questions)
      // data[key]['questions'] = questions;
      //return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    })
   .catch(error => console.log('addCardToDeck error', error));
}

export function submitDeck({ key,deck=[] }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]:deck
  }))
    .catch(error => console.log('addCardToDeck error', error));
  }
