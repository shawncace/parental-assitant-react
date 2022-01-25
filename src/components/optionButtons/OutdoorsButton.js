import { useContext } from "react";
import { DataContext } from "../../AppContext";

const OutdoorsButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK
    })
  }
  
  return ( 
  <>
    <button className='btn' onClick={handleClick}>Outdoors</button>
  </> );
}
 
export default OutdoorsButton;