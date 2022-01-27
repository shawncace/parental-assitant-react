import {createContext, useReducer} from 'react';
import craftsData from './data/crafts.json'
import educationalData from './data/educational.json'
import foodData from './data/food.json'
import gamesData from './data/games.json'
import outdoorsData from './data/outdoors.json'
import soloData from './data/solo.json'

const DataContext=createContext();

const ACTION = {
  SET_CRAFTS: 'setCrafts',
  SET_EDUCATIONAL: 'setEducational',
  SET_FOOD: 'setFood',
  SET_GAMES: 'setGames',
  SET_OUTDOORS: 'setOutdoors',
  SET_SOLO: 'setSolo',
  ACTIVITY_CLICK: 'activityClick',
  GO_BACK_CLICK: 'goBackClick'
}

const reducer = (state={
  activityName:''
}, action) =>{
  switch(action.type){
    case 'setCrafts':
      return{
        ...state, 
        activityName: craftsData[0].category,
        activityIdea: craftsData[0].idea,
        image: craftsData[0].image,
        alt: craftsData[0].alt,
        description: craftsData[0].description,
        url: craftsData[0].url
      }
    case 'setEducational':
      return{
        ...state, 
        activityName: educationalData[0].category,
        activityIdea: educationalData[0].idea}
    case 'setFood':
      return{
        ...state,
        activityName: foodData[0].category, 
        activityIdea: foodData[0].idea}
    case 'setGames':
      return{
        ...state,
        activityName: gamesData[0].category, 
        activityIdea: gamesData[0].idea}
    case 'setOutdoors':
      return{
        ...state,
        activityName: outdoorsData[0].category, 
        activityIdea: outdoorsData[0].idea}
    case 'setSolo':
      return{
        ...state, 
        activityName: soloData[0].category,
        activityIdea: soloData[0].idea}
    case 'activityClick':
      return{...state, clicked:true}
    case 'goBackClick':
      return{...state, clicked:false}
    default:
      throw new Error();
  }
}

const DataProvider = (props)=>{
  const [state, dispatch]=useReducer(reducer,{
    clicked: false,
    couples: false,
    activityName: '',
    activityIdea: '',
    image:'',
    alt: '',
    description: '',
    url:''
  })
  

  return (
    <DataContext.Provider
      value={{
        ACTION,
        clicked: state.clicked,
        activityName: state.activityName,
        activityIdea:state.activityIdea,
        image:state.image,
        alt:state.alt,
        description:state.description,
        url:state.url,
        dispatch
      }}>
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider}