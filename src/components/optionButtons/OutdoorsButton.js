import { useContext } from "react";
import { DataContext } from "../../AppContext";

const OutdoorsButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK
    })

    dispatch({
      type: ACTION.SET_OUTDOORS
    })
  }
  
  return ( 
  <>
    <button className='options-btn options-btn-second-row' onClick={handleClick}>Outdoors</button>
  </> );
}
 
export default OutdoorsButton;