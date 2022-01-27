import { useContext } from "react";
import { DataContext } from "../../AppContext";

const FoodButton = () => {
  const {dispatch, ACTION}=useContext(DataContext)
  
  const handleClick=()=>{
    dispatch({
      type: ACTION.ACTIVITY_CLICK
    })

    dispatch({
      type: ACTION.SET_FOOD
    })
  }
  
  return ( 
    <>
      <button className='btn' onClick={handleClick}>Food</button>
    </>
   );
}
 
export default FoodButton;