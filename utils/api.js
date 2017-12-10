import {AsyncStorage} from 'react-native'

const STORAGE_KEY = "MagicCards:cards"

export function fetchDecks(){
  return AsyncStorage.getItem(STORAGE_KEY).then((a)=>{JSON.parse(a)})
  .then((res)=> console.log(res))
}

export function submitDeck({title}){
  return AsyncStorage.setItem(STORAGE_KEY,JSON.stringify({
      test:'Test'
    }))
}
