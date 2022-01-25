import { useContext } from "react";
import { DataContext } from "../../AppContext";

const GamesButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK
    })
  }
  
  return (  
    <>
      <button className='btn' onClick={handleClick}>Games</button>
    </>
  );
}
 
export default GamesButton;