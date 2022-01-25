import {createContext, useReducer} from 'react';
import craftsData from './data/crafts.json'

const DataContext=createContext();

const ACTION = {
  SET_COUPLES: 'setCouples',
  ACTIVITY_CLICK: 'activityClick',
  GO_BACK_CLICK: 'goBackClick'
}

const reducer = (state={
  activityName:''
}, action) =>{
  switch(action.type){
    case 'setCouples':
      return{
        ...state, 
        activityName: craftsData.name}
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
    actiityName: craftsData.name
  })
  

  return (
    <DataContext.Provider
      value={{
        ACTION,
        clicked: state.clicked,
        activityName:state.activityName,
        dispatch
      }}>
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataProvider}