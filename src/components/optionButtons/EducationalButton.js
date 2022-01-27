import { useContext } from "react";
import { DataContext } from "../../AppContext";

const EducationalButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK
    })

    dispatch({
      type: ACTION.SET_EDUCATIONAL
    })
  }
  
  return ( 
    <>
      <button className='btn' onClick={handleClick}>Educational</button>
    </>
   );
}
 
export default EducationalButton
