import { useContext } from "react";
import { DataContext } from "../../AppContext";

const SoloButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK
    })
  }
  
  return ( 
    <>
      <button className='btn' onClick={handleClick}>Solo</button>
    </>
   );
}
 
export default SoloButton;