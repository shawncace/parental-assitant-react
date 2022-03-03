import { useContext } from "react";
import { DataContext } from "../../AppContext";

const GamesButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK
    })

    dispatch({
      type: ACTION.SET_GAMES
    })
  }
  
  return (  
    <>
      <button className='options-btn options-btn-second-row' onClick={handleClick}>Games</button>
    </>
  );
}
 
export default GamesButton;