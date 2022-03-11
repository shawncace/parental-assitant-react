import { useContext } from "react";
import { DataContext } from "../AppContext";

const RandomButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.RANDOM_CLICK,
    })
  }
  
  return (  
    <>
      <button 
      className="random-activity-btn"
      onClick={handleClick} >
        Random Activity
      </button>
    </>
  );
}
 
export default RandomButton;