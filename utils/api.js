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
        let deck = data[item];
        let count = (deck.questions.length)
        deck.count =  count
        deck.title = item;
        return deck;
       });

       return decks;
    })
   .catch(error => console.log('addCardToDeck error', error));
}

export function getCards({key}){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
        if (!results) {return []}
        let data = JSON.parse(results);
        let questions = [...data[key].questions]

        return questions
  })
}

export function submitDeck({ key,deck }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]:deck
  }))
    .catch(error => console.log('addCardToDeck error', error));
  }

export function addCardToDeck({ key, card }) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then(results => { let data = JSON.parse(results);
    let questions = [...data[key].questions, card]
    data[key]['questions'] = questions;
    return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
  })
 .catch(error => console.log('addCardToDeck error', error)); }
