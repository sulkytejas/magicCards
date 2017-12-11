import {AsyncStorage} from 'react-native'

const FLASHCARDS_STORAGE_KEY = "MagicCards:cards"


export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY) .then(results => {
    let data = JSON.parse(results);
    if(!data) { return [] }
    let keys = Object.keys(data);
    let decks = keys.map(function (item) {
      let card = data[item];
      card.title = item;
      return card;

    });

    return decks;
  })
  .catch(error => console.log('getDecks error', error));
}

export function submitDeck({ key, deck }) {
  console.log("key is"+ key);
  console.log("deck is"+ deck);
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[key]: deck}))
    .catch(error => console.log('addCardToDeck error', error));
  }
