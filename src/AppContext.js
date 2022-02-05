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
  NEXT_CLICK:'nextClick',
  GO_BACK_CLICK: 'goBackClick'
}

let counter=0

const shuffleArr = (arr)=> {
  arr.sort(()=>Math.random()-0.5)
  return arr
}

const reducer = (state, action) =>{
  switch(action.type){
    case 'setCrafts':
      const craft = shuffleArr(craftsData)
      console.log(craft)
      return{
        ...state, 
        data:craft
      }
    case 'setEducational':
      const education = shuffleArr(educationalData)
      return{
        ...state, 
        data:education
      }  
    case 'setFood':
      const food = shuffleArr(foodData)  
      return{
        ...state,
        data:food
      }
    case 'setGames':
      const games=shuffleArr(gamesData)
      return{
        ...state,
        data:games  
      }
    case 'setOutdoors':
      const outdoors=shuffleArr(outdoorsData)
      return{
        ...state,
        data:outdoors    
      }
    case 'setSolo':
      return{
        ...state, 
        activityName: soloData[0].category,
        activityIdea: soloData[0].idea}
    case 'activityClick':
      return{...state, clicked:true}
    case 'nextClick':
      counter=state.index 
      state.data.length-1===counter?
        counter=0
        :
        counter=state.index +1
      return{
        ...state,
        index:counter
      }
    case 'goBackClick':
      return{...state, clicked:false}
    default:
      throw new Error();
  }
}

const DataProvider = (props)=>{
  
  const [state, dispatch]=useReducer(reducer,{
    fakeIndex:0,
    index:0,
    clicked: false,
    data:[
      {
        
        idea:'',
        description:'',
        image:'',
        url:'',
        alt:'',
        category:''
      }
    ] 
  })
  

  return (
    <DataContext.Provider
      value={{
        
        ACTION,
        clicked: state.clicked,
        data:state.data,
        index:state.index,
        dispatch,
       
      }}>
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider}